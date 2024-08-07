const db2 = require('../../db2.js')
const moment = require('moment');


const models = require("../../models/all.js");

const { Op } = require('sequelize');
const marketService = require('../../service/marketService.js')

const market = {
    index: async function (req, res) {
        res.render('admin/market/list', {
            title: process.env.web_name
        })
    },
    record: async function (req, res) {
        res.render('admin/market/record', {
            title: process.env.web_name
        })
    },
    comment: async function (req, res) {
        let row = null;
        try {
            row = await models.marketModel.findOne({
                where: {
                    id: parseInt(req.params.id)
                }
            })
        } catch (ex) {

        }
        res.render('admin/market/comment', {
            title: process.env.web_name,
            data: row,
            id: row ? row.id : 0
        })
    },
    info: async function (req, res) {
        let row = null;
        try {
            row = await models.marketModel.findOne({
                where: {
                    id: parseInt(req.params.id)
                }
            })
        } catch (ex) {

        }
        console.log('cus_task_info', JSON.stringify(row))
        res.render('admin/market/info', {
            title: process.env.web_name,
            data: row,
        })
    },
    save: async function (req, res) {
        try {
            let row = await models.marketModel.findOne({
                where: {
                    id: req.body.id
                }
            })
            console.log(JSON.stringify(row))
            if (row.type == 3) {
                await models.userModel.update({
                    verifyStatus: req.body.status == 2 ? 2 : 4
                }, {
                    where: {
                        username: row.userName
                    }
                })
            }
            if (row.type == 4) {
                let info = row.info;
                console.log(info)
                await models.userCardModel.update({
                    verifyStatus: req.body.status == 2 ? 2 : 4
                }, {
                    where: {
                        id: info.id
                    }
                })
            }
            await models.marketModel.update({
                status: req.body.status,
                comment: req.body.comment,
                op: req.session.loginUser
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

            let symbol = searchParams ? searchParams.symbol : 'BTCUSDT';


            let where = [];
            where.push({

                symbol

            })

            console.log('market data', where, req.query.searchParams)
            const total = await models.marketModel.count({
                where: where
            })
            const result = await models.marketModel.findAll({
                where: where,
                limit: limit,
                offset: offset,
                order: [
                    ['id', 'desc']
                ]
            });
            for (const n in result) {
                //result[n].dataValues.typeName = marketService.getTypeName(result[n].dataValues.type);

                result[n].dataValues.openTime = moment(result[n].dataValues.openTime).format('YYYY-MM-DD HH:mm:ss');
                result[n].dataValues.closeTime = moment(result[n].dataValues.closeTime).format('YYYY-MM-DD HH:mm:ss');
                result[n].dataValues.created = moment(result[n].dataValues.created).format('YYYY-MM-DD HH:mm:ss');
                result[n].dataValues.updated = moment(result[n].dataValues.updated).format('YYYY-MM-DD HH:mm:ss');
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
    makeData: async function (req, res) {
        try {
            await marketService.getKlineData();
            res.send({
                code: 200
            })
        } catch (ex) {
            console.log(ex)
            res.send({ code: 500, message: ex.message });
        }
    }

}

module.exports = market;