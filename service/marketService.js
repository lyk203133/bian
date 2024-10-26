
const axios = require('axios');
const sequelizeDb = require('../sequelize.js')
const models = require("../models/all.js");
const baseService = require('./baseService.js')
const redisService = require('./redisService.js')
const moment = require('moment');
let marketService = {
    async openMarket(openTime, symbol) {
        console.error('openMarket开始预测结果', moment().format("YYYY-MM-DD HH:mm:ss"));
        
        try {
            let lastPrice = 0;
            let row = await models.ticketModel.findOne({
                where: {
                    status: 0,
                    buyTime: openTime - 60000,
                    pair: symbol.toLowerCase(),
                   
                },
                attributes: [
                    'price',
                    'buyTime',
                    'pair',
                    [sequelizeDb.literal(`SUM(CASE WHEN betType = 1 THEN quantity ELSE 0 END)`), 'total1'],
                    [sequelizeDb.literal(`SUM(CASE WHEN betType = 2 THEN quantity ELSE 0 END)`), 'total2']
                ],
                group: ['buyTime', 'pair', 'price'],
                raw: true
            });

            if (!global.cache.setting || Object.keys(global.cache.setting).length === 0) {
                global.cache.setting = await models.settingModel.findOne();
            }

            if (!row) {
                console.error('期号:'+openTime+',没有订单信息')
                return 0;
            }
            console.log(JSON.stringify(row));



            const market = await models.marketModel.findOne({
                where: {
                    openTime: openTime,
                    symbol: row.pair,
                    openType: 1,
                    status: 0
                }
            })
            if (!market) {
                let winContainer = []
                const win = parseInt(global.cache.setting.win)
                const winUser = win;
                const winSite = 100 - win;
                const betTotal1 = parseFloat(row.total1) //买多
                const betTotal2 = parseFloat(row.total2) //买空

                if (betTotal1 > betTotal2) {
                    for (let i = 0; i < winUser; i++)winContainer.push(1)
                    for (let i = 0; i < winSite; i++)winContainer.push(2)
                } else if (betTotal1 < betTotal2) {
                    for (let i = 0; i < winUser; i++)winContainer.push(2)
                    for (let i = 0; i < winSite; i++)winContainer.push(1)
                } else {
                    for (let i = 0; i < 50; i++) winContainer.push(1)
                    for (let i = 0; i < 50; i++) winContainer.push(2)

                }
                console.log('winContainer', winContainer);
                let shuffledWinArr = [];

                shuffledWinArr = baseService.shuffleArray(winContainer);
                console.log('shuffledWinArr', shuffledWinArr)
                /*for (let i = 0; i < 10; i++) {
                    shuffledWinArr = baseService.shuffleArray(shuffledWinArr);
                    console.log('shuffledWinArr', shuffledWinArr)
                }*/

                //选中混淆后随机10次,取第一笔
                const winRow = shuffledWinArr[0];
                const randomVal = baseService.getRandomNumberBetween001And009();
                
                if (winRow == 1) {
                     lastPrice = parseFloat(row.price) + parseFloat(randomVal)
                    console.log('预测涨,买多赢', row.price, randomVal, lastPrice, JSON.stringify(row))
                    
                   
                } else {
                     lastPrice = parseFloat(row.price) - parseFloat(randomVal)
                    console.log('预测跌,买空赢', row.price, -1 * randomVal, lastPrice, JSON.stringify(row))
                    
                     
                }

                console.warn(`期号:${openTime} - 买家胜率:${win} - 买多:${betTotal1} - 买空:${betTotal2} - 开奖:${winRow==1?"升":"跌"} - 买入价:${row.price} - 开奖价:${lastPrice}`)
            } else {
                console.log(market.openTime, market.symbol, '期次已经建立')
                lastPrice = 0
            }


            return lastPrice

        } catch (error) {
            console.error('openMarket error', error.message)
            return 0
        }
    },
    async getKlineDataBySymbol(interval, symbol = 'BTCUSDT', limit = 130) {
        if (!global.cache.setting || Object.keys(global.cache.setting).length === 0) {
            global.cache.setting = await models.settingModel.findOne();
        }
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
    //https://api.binance.com/api/v3/ticker/price?symbols=[%22BTCUSDT%22,%22ETHUSDT%22,%22BNBUSDT%22]
    async getKlinePriceBySymbols(symbols) {
        const symbolsStr = '["BTCUSDT","ETHUSDT","BNBUSDT"]';
        if (!global.cache.setting || Object.keys(global.cache.setting).length === 0) {
            global.cache.setting = await models.settingModel.findOne();
        }
        let klineData;
        try {
            const url = `https://api.binance.com/api/v3/ticker/price?symbols=${symbolsStr}`;
            console.log(symbols, url);
            const response = await axios.get(url)

            klineData = response.data;
            //console.log(klineData);
            return klineData;
        }
        catch (ex) {
            console.error('getKlinePriceBySymbols error', ex.message)
        }
        return null;
    },
    formatRow: function (symbol, element, intervalTime, lastPrice) {
        let formatRow = {
            symbol,
            intervalTime,
            openTime: moment(element[0]).format("YYYY-MM-DD HH:mm:ss"),
            closeTime: moment(element[6]).format("YYYY-MM-DD HH:mm:ss"),
            openPrice: parseFloat(element[1]),

            highPrice: parseFloat(element[2]),
            lowPrice: parseFloat(element[3]),
            lastPrice: lastPrice > 0 ? lastPrice : parseFloat(element[4]),
            volume: element[5],
            tradeVolume: element[7],
            tradeCount: element[8],
            created: moment(element[0]).format("YYYY-MM-DD HH:mm:ss"),
            updated: moment(element[0]).format("YYYY-MM-DD HH:mm:ss"),
        }

        return formatRow;
    },

    async getKlineData(interval = '1m') {
        return;
        if (!global.cache.setting || Object.keys(global.cache.setting).length === 0) {
            global.cache.setting = await models.settingModel.findOne();
        }


        let symbols = [
            'BTCUSDT',
            'ETHUSDT',
            'BNBUSDT',

        ]

        await sequelizeDb.query('ALTER TABLE market AUTO_INCREMENT = 1;');
        let openType = global.cache.setting.win > 0 ? 1 : 0
        for (let i in symbols) {

            let params = [];
            let listData = await this.getKlineDataBySymbol(interval, symbols[i], 5);
            if (!listData) continue;

            //listData.forEach(async element => {
            for (const n in listData) {
                let element = listData[n]
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

                const openTime = parseInt(element[0]);
                let lastPrice = element[4]
                if (global.cache.setting.win > 0)
                    lastPrice = await this.openMarket(openTime, symbols[i]);

                //缓存到redis
                //await redisService.setExValue(symbols[i]+'-openTime-'+openTime,60,lastPrice || element[4])

                console.log('自然数据', element, lastPrice)
                let row = this.formatRow(symbols[i], element, interval, lastPrice)
                console.log('开奖数据', row, lastPrice)
                row.openTime = element[0];
                row.closeTime = element[6];
                row.status = 0;
                row.openType = openType;

                params.push(row)
            };

            await models.marketModel.bulkCreate(params, {
                updateOnDuplicate: ['updated'],
                logging: false
            })
        }

    },

    async getNatureData(interval = '1m') {

        if (!global.cache.setting || Object.keys(global.cache.setting).length === 0) {
            global.cache.setting = await models.settingModel.findOne();
        }
        let symbols = [
            'BTCUSDT',
            //'ETHUSDT',
            //'BNBUSDT',
        ]
        let prices = await this.getKlinePriceBySymbols(symbols);
        await sequelizeDb.query('ALTER TABLE market AUTO_INCREMENT = 1;');
        let openType = global.cache.setting.win > 0 ? 1 : 0
        for (let i in symbols) {
            try {
                let params = [];
                let priceData = await prices.find(e => e.symbol == symbols[i])
                if (!priceData) continue;

                const wholeMinute = baseService.getWholeMinute(60);

                const openTime = wholeMinute.timestampThis
                let lastPrice = 0;
                if (global.cache.setting.win > 0)
                    lastPrice = await this.openMarket(openTime, symbols[i]);
                if(!lastPrice || lastPrice ===0) lastPrice = priceData.price;

                //缓存到redis
                //await redisService.setExValue(symbols[i]+'-openTime-'+openTime,60,lastPrice || element[4])
                console.log('自然数据,期号:',wholeMinute, priceData, lastPrice)
                 
                let formatRow = {
                    symbol: symbols[i],
                    intervalTime:interval,
                    openTime: wholeMinute.timestampThis,
                    closeTime: wholeMinute.timestampThis + 59999,
                    openPrice: parseFloat(lastPrice),
                    highPrice: parseFloat(lastPrice),
                    lowPrice: parseFloat(lastPrice),
                    lastPrice,
                    volume: 10,
                    tradeVolume: 1,
                    tradeCount: 1,
                    created: moment().format("YYYY-MM-DD HH:mm:ss"),
                    updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                }
            
                formatRow.status = 0;
                formatRow.openType = openType;
                console.log('开奖数据', formatRow, lastPrice)
                params.push(formatRow)
                await models.marketModel.bulkCreate(params, {
                    updateOnDuplicate: ['updated'],
                    logging: false
                })
            } catch (ex) {
                console.error('getNatureData error', ex.message)
            }
        }




    }
}

module.exports = marketService
