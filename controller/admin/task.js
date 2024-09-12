const db2 = require('../../db2.js')
const moment = require('moment');

const cusTaskService = require('../../service/cusTask.js')
const models = require("../../models/all.js");
const sequelize = require('../../sequelize.js');
const { Op } = require('sequelize');

const taskController = {
    index: async function (req, res) {
        res.render('admin/task/list', {
            title: process.env.web_name
        })
    },
    record: async function (req, res) {
        res.render('admin/task/record', {
            title: process.env.web_name
        })
    },
    comment: async function (req, res) {
        let row = null;
        try {
            row = await models.taskModel.findOne({
                where: {
                    id: parseInt(req.params.id)
                }
            })
        } catch (ex) {

        }
        res.render('admin/task/comment', {
            title: process.env.web_name,
            data: row,
            id: row ? row.id : 0
        })
    },
    info: async function (req, res) {
        let row = null;
        try {
            row = await models.taskModel.findOne({
                where: {
                    id: parseInt(req.params.id)
                }
            })
        } catch (ex) {

        }
        console.log('cus_task_info', JSON.stringify(row))
        res.render('admin/task/info', {
            title: process.env.web_name,
            data: row,
        })
    },
    save: async function (req, res) {
        try {
            let row = await models.taskModel.findOne({
                where: {
                    id: parseInt(req.body.id)
                }
            })
            console.log(JSON.stringify(row))

            if (req.body.status == 2) {
                let setting = await models.settingModel.findOne();
                const transaction = await sequelize.transaction();
                try {

                    const userRow = await models.userModel.findOne({
                        where: { username: row.username },
                        lock: true,
                        transaction: transaction,
                    });
                    if (!userRow) {
                        await transaction.rollback();
                        res.send({ code: 500, message: '會員數據不存在' });
                        return;
                    }


                    let amount = parseFloat(setting.taskBonus);
                    let balance = parseFloat(userRow.balance); // 或者使用 Number(user.balance);
                    userRow.balance = balance + amount;
                    console.log('user new balance', userRow.balance, amount)
                    await userRow.save({ transaction: transaction });
                    await models.balanceLogModel.create({
                        userId: userRow.id,

                        coin: amount,
                        beforeCoin: balance,
                        afterCoin: userRow.balance,
                        type: 4,
                        remark: '贊助商任務獎勵:' + row.id,
                        created: moment().format("YYYY-MM-DD HH:mm:ss"),
                        updated: moment().format("YYYY-MM-DD HH:mm:ss"),

                    }, {
                        transaction: transaction
                    })

                    await models.taskModel.update({
                        status: req.body.status,
                        remark: req.body.comment,
                        verifyTime: moment().format("YYYY-MM-DD HH:mm:ss"),
                        operator: req.session.loginUser
                    }, {
                        where: {
                            id: row.id
                        },
                        transaction: transaction
                    })
                    await transaction.commit();
                    res.send({ code: 0, message: "succes" });
                    return;
                } catch (error) {
                    await transaction.rollback();
                    console.error('task save error', error)
                    res.send({
                        code: 500,
                        message: 'error'
                    })
                    return;
                }
            } else {
                await models.taskModel.update({
                    status: req.body.status,
                    remark: req.body.comment,
                    verifyTime: moment().format("YYYY-MM-DD HH:mm:ss"),
                    operator: req.session.loginUser
                }, {
                    where: {
                        id: parseInt(req.body.id)
                    }
                })
            }
            res.send({ code: 0, message: "succes" });
        } catch (ex) {
            res.send({ code: 500, message: ex.message });
            return;
        }
    },
    list_data: async function (req, res) {
        try {
            let page = req.query.page ? req.query.page : 1;
            let limit = req.query.limit ? parseInt(req.query.limit) : 30;
            let offset = (page - 1) * limit;
            let searchParams = req.query.searchParams ? JSON.parse(req.query.searchParams) : null;
            let beginTime = searchParams && searchParams.begintime ? searchParams.begintime : '2023-01-01 00:00'
            let endTime = searchParams && searchParams.endtime ? searchParams.endtime : moment().format("YYYY-MM-DD HH:mm:ss")

            let keyword = searchParams ? searchParams.keyword : '';
            let type = searchParams ? searchParams.type : null;
            let op = searchParams ? searchParams.op : null;
            let status = req.query.status || 0;

            let where = [];
            where.push({

                created: {
                    [Op.gte]: beginTime
                }
            })
            where.push({
                created: {
                    [Op.lte]: endTime
                }

            })
            if (keyword) {
                where.push({
                    username: {
                        [Op.like]: '%' + keyword + '%'
                    },
                })
            }
            if (op) {
                where.push({
                    op: {
                        [Op.like]: '%' + op + '%'
                    },
                })
            }
            /* if (type) {
             where.push({
                 type: type,
             })
         }
*/

            status = parseInt(status)
            if (status === 0) {
                where.push({
                    status: 1,
                })
            } else {
                where.push({
                    status: { [Op.gt]: 1 }
                })
            }

            console.log('task data', where, req.query.searchParams)
            const total = await models.taskModel.count({
                where: where,
                include: {
                    model: models.taskPlatformModel
                }
            })
            const result = await models.taskModel.findAll({
                where: where,
                include: {
                    model: models.taskPlatformModel
                },
                limit: limit,
                offset: offset,
                order: [
                    ['id', 'desc']
                ]
            });
            for (const n in result) {

                result[n].dataValues.statusName = cusTaskService.getStatusName(result[n].dataValues.status);
                result[n].dataValues.created = moment(result[n].dataValues.created).format('YYYY-MM-DD HH:mm:ss');
                result[n].dataValues.verifyTime = moment(result[n].dataValues.verifyTime).format('YYYY-MM-DD HH:mm:ss');
            }

            res.send({
                code: 0,
                count: total,
                data: result
            })

        } catch (ex) {
            console.log(ex)
            res.send({ code: 500, message: ex.message });
        }
    },


}

module.exports = taskController;