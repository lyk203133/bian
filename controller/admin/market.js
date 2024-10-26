const moment = require('moment');
const models = require("../../models/all.js");
const { Op, fn, col } = require('sequelize');
const marketService = require('../../service/marketService.js');
const baseService = require('../../service/baseService.js');
const redisService = require('../../service/redisService.js');
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
            //console.log(JSON.stringify(row))
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

            let openTimes = result.map(t => {
                return t.openTime
            })

            const buyResult = await models.ticketModel.findAll({
                attributes: [
                    'buyTime',
                    'betType',
                    [fn('SUM', col('quantity')), 'totalQuantity'],
                    [fn('COUNT', col('id')), 'count']
                ],
                where: {
                    pair: symbol.toLowerCase(),
                    buyTime: {
                        [Op.in]: openTimes
                    }
                },
                group: ['buyTime', 'betType'],
                raw: true
            });


            for (let  n = 0;n<result.length;n++) {

                //result[n].dataValues.typeName = marketService.getTypeName(result[n].dataValues.type);
                let buyItemA = buyResult.find(t => t.betType === 1 && t.buyTime === result[n].openTime);
                if (buyItemA) {
                    result[n].dataValues.buyCount = buyItemA.count;
                    result[n].dataValues.buyQuantity = buyItemA.totalQuantity;
                }
                let buyItemB = buyResult.find(t => t.betType === 2 && t.buyTime === result[n].openTime);
                if (buyItemB) {
                    result[n].dataValues.buyCount2 = buyItemB.count;
                    result[n].dataValues.buyQuantity2 = buyItemB.totalQuantity;
                }
                //(buyItemA, buyItemB)
                result[n].dataValues.openTimest =  result[n].dataValues.openTime ;
                result[n].dataValues.openTime = moment(result[n].dataValues.openTime).format('YYYY-MM-DD HH:mm:ss');
                
                result[n].dataValues.closeTime = moment(result[n].dataValues.closeTime).format('YYYY-MM-DD HH:mm:ss');
                result[n].dataValues.created = moment(result[n].dataValues.created).format('YYYY-MM-DD HH:mm:ss');
                result[n].dataValues.updated = moment(result[n].dataValues.updated).format('YYYY-MM-DD HH:mm:ss');
                if(n < result.length-1)
                    result[n].dataValues.prevLastPrice = result[n+1].dataValues.lastPrice;
                if(n == result.length -1){
                     
                }
            }

            res.send({
                code: 0,
                count: total,
                data: result,
                buyResult
            })

        } catch (ex) {
            console.log('list market data error',ex.message)
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
            
            res.send({ code: 500, message: ex.message });
        }
    },
    win1: async function (req, res) {
        try {
            let row = await models.marketModel.findOne({
                where: {
                    id: req.body.id
                }
            })

            if (moment().unix() * 1000 - parseInt(row.openTime) > 60 * 1000) {
                res.send({
                    code: 500,
                    message: '已經超時'
                })
                return;
            }
            let randomVal = baseService.getRandomNumberBetween001And009();

            row.dataValues.openTime += 60 * 1000;
            row.dataValues.closeTime += 60 * 1000;
            row.dataValues.openPrice = parseFloat(row.dataValues.openPrice) + randomVal;
            row.dataValues.highPrice = parseFloat(row.dataValues.highPrice) + randomVal;
            row.dataValues.lowPrice = parseFloat(row.dataValues.lowPrice) + randomVal;
            row.dataValues.lastPrice = parseFloat(row.dataValues.lastPrice) + randomVal;

            let redisKey = row.symbol + '-openTime-'+row.openTime;
            await redisService.setExValue(redisKey,60,row.dataValues.lastPrice.toString())
            let data = JSON.parse(JSON.stringify(row))
            data['status'] = 1;
            data['openType'] = 2;
            delete data['id']
            console.log('win1 create', randomVal, data)
            await models.marketModel.create(data)

            res.send({ code: 0, message: "succes" });
        } catch (ex) {
            console.error('win1', ex)
            res.send({ code: 500, message: ex.message });
        }


    }, win2: async function (req, res) {
        try {
            let row = await models.marketModel.findOne({
                where: {
                    id: req.body.id
                }
            })

            if (moment().unix() * 1000 - parseInt(row.openTime) > 60 * 1000) {
                res.send({
                    code: 500,
                    message: '已經超時'
                })
                return;
            }
            let randomVal = baseService.getRandomNumberBetween001And009();

            row.dataValues.openTime += 60 * 1000;
            row.dataValues.closeTime += 60 * 1000;
            row.dataValues.openPrice = parseFloat(row.dataValues.openPrice) - randomVal;
            row.dataValues.highPrice = parseFloat(row.dataValues.highPrice) - randomVal;
            row.dataValues.lowPrice = parseFloat(row.dataValues.lowPrice) - randomVal;
            row.dataValues.lastPrice = parseFloat(row.dataValues.lastPrice) - randomVal;
            let redisKey = row.symbol + '-openTime-'+row.openTime;
            await redisService.setExValue(redisKey,60,row.dataValues.lastPrice.toString())
            let data = JSON.parse(JSON.stringify(row))
            data['status'] = 1;
            data['openType'] = 2;
            delete data['id']
            console.log('win2 create', randomVal, data)
            await models.marketModel.create(data)

            res.send({ code: 0, message: "succes" });
        } catch (ex) {
            console.error('win2', ex)
            res.send({ code: 500, message: ex.message });
        }


    },
    winFuture: async function (req, res) {
        try {

            let row = await models.marketModel.findOne({
                where: {
                    symbol: req.body.symbol
                },
                limit: 1,
                order: [['id', 'desc']]
            })
            if (row == null) {
                res.send({ code: 500, message: "沒有參考數據" });
                return false;
            }



            const futureMinutes = [];

            // 获取当前时间
            //let currentDate = new Date();//保持当前时间加5方
            let currentDate = new Date(row.openTime);//一直往最后一笔追加5笔

            // 循环生成未来 5 个自然分钟
            for (let i = 1; i <= 5; i++) {
                /*
                {id: 7425091
symbol: BTCUSDT
intervalTime: 1m
openTime: 2024-09-06 08:20:00
closeTime: 2024-09-06 08:20:59
openPrice: 56333.8100
highPrice: 56333.8200
lowPrice: 56333.8100
lastPrice: 56333.8200
volume: 0.0120
tradeVolume: 675.4424
tradeCount: 5
created: 2024-09-06 08:20:00
updated: 2024-09-06 08:20:00
openTimest: 1725582000000
type: 1
comment: 後臺操作`買多必贏`}
                */
                const newData = { ...row.dataValues };  // 复制对象
                //console.log(newData)
                delete newData.id;  // 删除 `id` 属性
                let randomVal = baseService.getRandomNumberBetween001And009();
                let sign = Math.random() > 0.5 ? 1 : -1;
                // 根据 sign 决定是加还是减

                newData.openPrice = parseFloat(newData.openPrice) + randomVal * sign;
                newData.highPrice = parseFloat(newData.highPrice) + randomVal * sign;
                newData.lowPrice = parseFloat(newData.lowPrice) + randomVal * sign;
                newData.lastPrice = parseFloat(newData.lastPrice) + randomVal * sign;

                

                // 创建一个新的 Date 对象，基于当前时间加上 i 分钟
                const futureDate = new Date(currentDate.getTime() + i * 60000);
                //newData.openTime = moment(futureDate).format("YYYY-MM-DD HH:mm:00")
                //newData.closeTime = moment(futureDate).format("YYYY-MM-DD HH:mm:59")

                // 获取 openTime，确保秒为 00
                const openTimeDate = new Date(futureDate.getTime());
                openTimeDate.setSeconds(0, 0);  // 秒和毫秒设置为 00
                const openTimeTimestamp = openTimeDate.getTime();  // 获取毫秒级时间戳
                newData.openTime = openTimeTimestamp;
                // 获取 closeTime，确保秒为 59
                const closeTimeDate = new Date(futureDate.getTime());
                closeTimeDate.setSeconds(59, 999);  // 秒设置为 59，毫秒设置为 999
                const closeTimeTimestamp = closeTimeDate.getTime();  // 获取毫秒级时间戳
                newData.closeTime = closeTimeTimestamp;

                newData.created = moment().format("YYYY-MM-DD HH:mm:ss")
                newData.updated = moment().format("YYYY-MM-DD HH:mm:ss")
                futureMinutes.push(newData);

                let redisKey = row.symbol + '-openTime-'+newData.openTime;
                await redisService.setExValue(redisKey,60 * i,newData.lastPrice.toString())

            }

            console.log(futureMinutes);

            await models.marketModel.bulkCreate(futureMinutes, {
                updateOnDuplicate: ['updated']
            })

            res.send({ code: 0, message: "succes", data: futureMinutes });
        } catch (ex) {
            console.error('win future', ex)
            res.send({ code: 500, message: ex.message });
        }


    },


}

module.exports = market;