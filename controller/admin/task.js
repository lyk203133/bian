const db2 = require('../../db2.js')
const moment = require('moment');

const cusTaskService = require('../../service/cusTask.js')
const models = require("../../models/all.js");

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
                    id: req.body.id
                }
            })
            console.log(JSON.stringify(row))


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
            res.send({ code: 0, message: "succes" });
        } catch (ex) {
            res.send({ code: 500, message: ex.message });
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
                    status: 0,
                })
            } else {
                where.push({
                    status: { [Op.gt]: 0 }
                })
            }

            console.log('task data', where, req.query.searchParams)
            const total = await models.taskModel.count({
                where: where
            })
            const result = await models.taskModel.findAll({
                where: where,
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