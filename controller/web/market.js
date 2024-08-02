
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
const marketController = {
    market: async function (req, res) {
        let symbol = req.query.symbol || 'BTCUSDT';
        symbol = symbol.toLowerCase();
        let setting = {
            amounts:[1,10,100,1000,10000]
        };
        try {
            setting = await models.settingModel.findOne({
                where: {
                     id: 1
                }
           })

           setting.dataValues.amounts = setting.amounts.split(',')
         
      }catch(ex){
           console.error('market error',ex.message)
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
            const url = `https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}&interval=${interval}&limit=${limit}`;

            const response = await axios.get(url)

            const klineData = response.data;
            console.log(klineData);

            res.send({
                code: 200,
                data: klineData
            });
        } catch (ex) {
            console.error(ex);
            res.send({
                code: 500,
                data: []
            })
        }
    },
    pricing: async function (req, res) {
        try {

            let bi = 'BTC,BNB,ETH,USDC,TRX,SOL,ADA,DOGE,MATIC,DOT';
            let symbolArr = bi.split(',').map(e => {
                return `%22${e}USDT%22`
            })

            let symbols = req.query.symbol || '[' + symbolArr.join(',') + ']';

            const url = `https://api.binance.com/api/v3/ticker/24hr?symbols=${symbols}`;

            const response = await axios.get(url)

            const rows = response.data;
            console.log(rows);

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
    }


}

module.exports = marketController;