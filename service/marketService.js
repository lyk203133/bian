
const axios = require('axios');
const sequelizeDb = require('../sequelize.js')
const models = require("../models/all.js");
const moment = require('moment');
let marketService = {

    async getKlineDataBySymbol(interval, symbol = 'BTCUSDT', limit = 130) {
        let klineData;
        try {
            const url = `https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}&interval=${interval}&limit=${limit}`;
            console.log(symbol, url);
            const response = await axios.get(url)

            klineData = response.data;
            //console.log(klineData);
            return klineData;
        }
        catch (ex) {
            console.error('getKlineData error', ex.message)
        }
        return null;
    },

    formatRow: function (symbol, element, intervalTime) {
        let formatRow = {
            symbol,
            intervalTime,
            openTime: moment(element[0]).format("YYYY-MM-DD HH:mm:ss"),
            closeTime: moment(element[6]).format("YYYY-MM-DD HH:mm:ss"),
            openPrice: element[1],

            highPrice: element[2],
            lowPrice: element[3],
            lastPrice: element[4],
            volume: element[5],
            tradeVolume: element[7],
            tradeCount: element[8],
            created: moment(element[0]).format("YYYY-MM-DD HH:mm:ss"),
            updated: moment(element[0]).format("YYYY-MM-DD HH:mm:ss"),
        }

        return formatRow;
    },

    async getKlineData(interval = '1m') {
        let symbols = [
            'BTCUSDT',
            'ETHUSDT',
            'BNBUSDT',

        ]

        await sequelizeDb.query('ALTER TABLE market AUTO_INCREMENT = 1;');
        for (let i in symbols) {

            let params = [];
            let listData = await this.getKlineDataBySymbol(interval, symbols[i]);
            if (!listData) continue;

            listData.forEach(element => {
                /*
                [
                    1499040000000,      // k线开盘时间
                    "0.01634790",       // 开盘价
                    "0.80000000",       // 最高价
                    "0.01575800",       // 最低价
                    "0.01577100",       // 收盘价(当前K线未结束的即为最新价)
                    "148976.11427815",  // 成交量
                    1499644799999,      // k线收盘时间
                    "2434.19055334",    // 成交额
                    308,                // 成交笔数
                    "1756.87402397",    // 主动买入成交量
                    "28.46694368",      // 主动买入成交额
                    "17928899.62484339" // 请忽略该参数
                ]
                */
                let row = this.formatRow(symbols[i], element, interval)
                row.openTime = element[0];
                row.closeTime = element[6];
                params.push(row)
            });

            await models.marketModel.bulkCreate(params, {
                updateOnDuplicate: ['updated'],
                logging: false
            })
        }




    }
}

module.exports = marketService
