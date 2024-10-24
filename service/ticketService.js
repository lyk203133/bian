
const axios = require('axios');
const sequelize = require('../sequelize.js')
const models = require("../models/all.js");
const baseService = require('./baseService.js')
const redisService = require('./redisService.js')
const moment = require('moment');
let ticketService = {
    async calculateTicket() {

        console.error('开始结算订单', moment().format("YYYY-MM-DD HH:mm:ss"));
        let rows = await models.ticketModel.findAll({
            where: {
                status: 0,

            }
        })

        for (let i in rows) {
            try {
                let row = rows[i];
                console.log('开始结算订单', row.id, row.userId);

                //获取价格
                let openTime = (moment(row.resultTime).unix()) * 1000;
                let pairBianceData = await models.marketModel.findOne({
                    where: {
                        intervalTime: '1m',
                        symbol: row.pair.toUpperCase(),
                        openTime: openTime

                    }
                })


                //let pairBianceData = result.find(t => t.symbol == row.pair.toUpperCase() && t.openTime == moment(row.resultTime).unix() * 1000)
                if (pairBianceData) {
                    let resultPrice = parseFloat(pairBianceData.lastPrice);
                    let buyPrice = parseFloat(row.price);
                    let result = 0;
                    if (row.betType == 1) {
                        //涨
                        if (resultPrice > buyPrice) result = row.quantity;
                    } else if (row.betType == 2) {
                        //涨
                        if (resultPrice < buyPrice) result = row.quantity;
                    }

                    console.error('订单结算数据', row.id, '会员', row.userId, '结算价', resultPrice, '买入价', buyPrice, '结果', result, '订单类型', row.betType)

                    if (result > 0) {
                        const transaction = await sequelize.transaction();
                        try {
                            let userRow = await models.userModel.findOne({
                                where: { id: row.userId },
                                lock: true,
                                transaction: transaction,
                            });
                            if (!userRow) {
                                await transaction.rollback();
                                continue;
                            }


                            let amount = parseFloat(result);
                            let balance = parseFloat(userRow.balance); // 或者使用 Number(user.balance);
                            userRow.balance = balance + amount + amount;
                            console.log('user new balance', userRow.balance, amount)
                            await userRow.save({ transaction: transaction });
                            await models.balanceLogModel.create({
                                userId: userRow.id,
                                coin: amount,
                                beforeCoin: balance,
                                afterCoin: userRow.balance,
                                type: 1,
                                remark: '訂單結算(' + row.id + ')',
                                created: moment().format("YYYY-MM-DD HH:mm:ss"),
                                updated: moment().format("YYYY-MM-DD HH:mm:ss"),

                            }, {
                                transaction: transaction
                            })

                            await models.ticketModel.update({
                                resultPrice,
                                result,
                                status: 1,
                                updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                            }, {
                                where: {
                                    id: row.id
                                },
                                transaction: transaction
                            })
                            await transaction.commit();
                        } catch (ex) {
                            await transaction.rollback();
                            console.error(ex.message)
                            continue;
                        }
                    } else {
                        await models.ticketModel.update({
                            resultPrice,
                            result,
                            status: 1,
                            updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                        }, {
                            where: {
                                id: row.id
                            }
                        })
                    }
                }

            } catch (error) {
                console.error('calculateTicket error', error.message)
                 
            }
        }
    }
}

module.exports = ticketService
