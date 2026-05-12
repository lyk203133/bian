
const moment = require('moment');
const ChineseRandomName = require('chinese-random-name');
const { Sequelize, Op, DataTypes, QueryTypes, Model } = require('sequelize');
const sequelize = require('../../sequelize.js');
const userModel = require('../../models/user.js');
const levelModel = require('../../models/level.js');
const models = require('../../models/all.js');
const session = require('express-session');
const crypto = require('crypto-js')
const axios = require('axios');
const redisService = require('../../service/redisService.js');
const baseService = require('../../service/baseService.js');
const marketController = {
    market: async function (req, res) {
        let symbol = req.query.symbol || 'BTCUSDT';
        symbol = symbol.toLowerCase();
        let setting = {
            amounts: [1, 10, 100, 1000, 10000]
        };
        try {
            setting = await models.settingModel.findOne({
                where: {
                    id: 1
                }
            })

            setting.dataValues.amounts = setting.amounts.split(',')

        } catch (ex) {
            console.error('market error', ex.message)
        }
        res.render('web/market', {
            symbol,
            setting
        })
    },
    marketData: async function (req, res) {
        try {
            let symbol = req.query.symbol || 'BTCUSDT';
            let interval = req.query.interval || '15m';
            let limit = req.query.limit || 100;
            const apiHosts = [
                'https://api1.binance.com',
                'https://api2.binance.com',
                'https://api3.binance.com',
                'https://api.binance.com',
            ];
            for (const host of apiHosts) {
                try {
                    const url = `${host}/api/v3/klines?symbol=${symbol.toUpperCase()}&interval=${interval}&limit=${limit}`;
                    const response = await axios.get(url, { timeout: 5000 });
                    return res.send({ code: 200, data: response.data });
                } catch (ex) {
                    console.warn(`marketData failed on ${host}:`, ex.message);
                }
            }
            res.send({ code: 500, data: [] });
        } catch (ex) {
            console.error(ex);
            res.send({ code: 500, data: [] });
        }
    },
    pricing: async function (req, res) {
        try {
            let bi = 'BTC,BNB,ETH,USDC,TRX,SOL,ADA,DOGE,MATIC,DOT';
            let symbolArr = bi.split(',').map(e => `%22${e}USDT%22`);
            let symbols = req.query.symbol || '[' + symbolArr.join(',') + ']';
            const apiHosts = [
                'https://api1.binance.com',
                'https://api2.binance.com',
                'https://api3.binance.com',
                'https://api.binance.com',
            ];
            for (const host of apiHosts) {
                try {
                    const url = `${host}/api/v3/ticker/24hr?symbols=${symbols}`;
                    const response = await axios.get(url, { timeout: 5000 });
                    return res.send({ code: 200, data: response.data });
                } catch (ex) {
                    console.warn(`pricing failed on ${host}:`, ex.message);
                }
            }
            res.send({ code: 500, data: [] });
        } catch (ex) {
            console.error(ex);
            res.send({ code: 500, data: [] });
        }
    },
    marketDataLast: async function (req, res) {
        try {
            let rows = await models.marketModel.findAll({
                where: {
                    symbol: req.query.symbol.toUpperCase(),
                    openTime: {
                        [Op.lte]: (moment().unix()) * 1000
                    }
                },
                //attributes: ['openTime', 'closeTime', 'openPrice', 'lastPrice','lowPrice','volume'],
                limit: 50,
                order: [['id', 'desc']]
            })
            res.send({
                code: 200,
                data: rows
            });
        } catch (ex) {
            console.error(ex);
            res.send({
                code: 500,
                data: []
            })
        }
    },
    getBetRow: async function (req, res) {
        try {
            let openTime = baseService.getCurrentMinuteTimestamp();
            if (new Date().getSeconds() > 45) {
                openTime = baseService.getCurrentMinuteTimestamp() + 60000; // 加 60 秒 (而不是 60000 毫秒)
            }

            let row = await models.marketModel.findOne({
                where: {
                    symbol: req.query.symbol.toUpperCase(),
                    openTime
                },
            })
            if (!row) {
                res.send({
                    code: 404,
                    data: {}
                })
                return;
            }
            res.send({
                code: 200,
                data: row
            });
        } catch (ex) {
            console.error(ex);
            res.send({
                code: 500,
                data: {}
            })
        }
    },
    openPrice: async function (req, res) {
        const symbol = req.params.symbol;
        const openTime = req.params.time;
        const redisKey = `${symbol.toUpperCase()}-openTime-${openTime}`
        /*const price = await redisService.getValue(redisKey) || 5000
        res.send({price})*/

        try {
            let row = await models.marketModel.findOne({
                where: {
                    symbol: symbol,
                    openTime: openTime
                },
                //attributes: ['openTime', 'closeTime', 'openPrice', 'lastPrice','lowPrice','volume'],
            })
            res.send({
                price: row ? row.lastPrice : 0
            });
        } catch (ex) {
            console.error(ex);
            res.send({
                price: 0
            })
        }
    }


}

module.exports = marketController;