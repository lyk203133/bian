
const sequelizeDb = require('../sequelize.js')
const models = require("../models/all.js");
const moment = require("moment")
let baseService = {

    formatHtmlContent(text) {
        // 将换行符转换为<br>标签  
        let formattedText = text.replace(/\n/g, '<br>');
        formattedText = formattedText.replace(/[\t ]+/g, match => {
            // 将每个空格和制表符替换为等量的HTML空格实体  
            // 注意：这里简单地将制表符视为4个空格（这取决于你的具体需求）  
            return ' '.repeat(match.replace(/\t/g, '    ').length).split('').map(() => '&nbsp;').join('');
        });

        return formattedText;
    },
    getWholeMinuteNature: function (seconds = 60) {
        // 获取当前时间  
        let now = moment();
    
        // 克隆当前时间并减去一分钟  
        let oneMinuteAgo = now.clone().format("YYYY-MM-DD HH:mm:00");
        
        // 克隆当前时间并加上 seconds 秒  
        let oneMinuteFuture = now.clone().add(seconds, 'seconds').format("YYYY-MM-DD HH:mm:00");
    
        // 转换为Unix时间戳（毫秒）  
        let timestampAgo = moment(oneMinuteAgo).unix() * 1000;  
        let timestampFuture = moment(oneMinuteFuture).unix() * 1000;  
    
        return {
            oneMinuteAgo,
            oneMinuteFuture,
            timestampAgo,
            timestampFuture
        }
    },
    getWholeMinute: function (seconds = 60) {
        // 获取当前时间
        let now = moment();
        
        // 获取当前秒数
        let currentSeconds = now.seconds();
    
        // 判断当前秒数是否大于等于 45
        if (currentSeconds >= 45) {
            // 如果秒数 >= 45，基于下一个整分钟
            let lastMinute = now.clone().format("YYYY-MM-DD HH:mm:00");
            let timestampLast = moment(lastMinute).unix() * 1000; // 下一个整分钟的 Unix 时间戳（毫秒）

            let thisMinute = now.clone().add(1, 'minute').format("YYYY-MM-DD HH:mm:00");
            let timestampThis = moment(thisMinute).unix() * 1000; // 下一个整分钟的 Unix 时间戳（毫秒）

            let nextMinute = now.clone().add(2, 'minute').format("YYYY-MM-DD HH:mm:00");
            let timestampNext = moment(nextMinute).unix() * 1000; // 下一个整分钟的 Unix 时间戳（毫秒）
    
            return {
                lastMinute, // 下一个自然分钟为基准
                timestampLast,
                thisMinute,
                timestampThis,
                nextMinute,
                timestampNext
            };
        } else {
            // 如果秒数 < 45，基于当前整分钟
             // 克隆当前时间并减去一分钟  
            let thisMinute = now.clone().format("YYYY-MM-DD HH:mm:00");
            
            // 克隆当前时间并加上 seconds 秒  
            let nextMinute = now.clone().add(1, 'minute').format("YYYY-MM-DD HH:mm:00");
        
            let futureMinute = now.clone().add(2, 'minute').format("YYYY-MM-DD HH:mm:00");
            let timestampFuture = moment(futureMinute).unix() * 1000; // 下一个整分钟的 Unix 时间戳（毫秒）
            // 转换为Unix时间戳（毫秒）  
            let timestampThis = moment(thisMinute).unix() * 1000;  
            let timestampNext = moment(nextMinute).unix() * 1000; 
    
            return {
                thisMinute,
                timestampThis,
                nextMinute,
                timestampNext,
                futureMinute,
                timestampFuture
            };
        }
    },    
    async setting() {
        let row;
        try {
            row = await models.settingModel.findOne({
                where: {
                    id: 1
                }
            })

        } catch (ex) {
            console.error('get setting error', ex.message)
        }
        return row;
    },
    getRandomNumberBetween001And009() {
        return parseFloat(parseFloat(0.010 + Math.random() * 0.089).toFixed(3));
    },
     getToday() {
        const todayStart = moment().startOf('day'); // 今天的开始时间
        const todayEnd = moment().endOf('day'); // 今天的结束时间

        return { beginTime:moment(todayStart).format("YYYY-MM-DD 00:00:00"),  endTime:moment(todayEnd).format("YYYY-MM-DD 23:59:59") };
    },
    getYesterday() { 
        // 获取昨天的开始和结束时间
        const yesterdayStart = moment().subtract(1, 'days').startOf('day'); // 昨天的开始时间
        const yesterdayEnd = moment().subtract(1, 'days').endOf('day'); // 昨天的结束时间
        return { beginTime:moment(yesterdayStart).format("YYYY-MM-DD 00:00:00"),  endTime:moment(yesterdayEnd).format("YYYY-MM-DD 23:59:59") };
    },
    getThisWeek() {
        // 获取本周的开始和结束时间
        const thisWeekStart = moment().startOf('week'); // 本周的开始时间
        const thisWeekEnd = moment().endOf('week'); // 本周的结束时间
        return { beginTime:moment(thisWeekStart).format("YYYY-MM-DD 00:00:00"),  endTime:moment(thisWeekEnd).format("YYYY-MM-DD 23:59:59") };  
    },
    getLastWeek() {
        // 获取上周的开始和结束时间
        const lastWeekStart = moment().subtract(1, 'weeks').startOf('week'); // 上周的开始时间
        const lastWeekEnd = moment().subtract(1, 'weeks').endOf('week'); // 上周的结束时间
        return { beginTime:moment(lastWeekStart).format("YYYY-MM-DD 00:00:00"),  endTime:moment(lastWeekEnd).format("YYYY-MM-DD 23:59:59") };  
    },
    getIp(req){
        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        if (ip && ip.includes(',')) {
            ip = ip.split(',')[0];
        }

        return ip;
    },
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // 随机索引
            [array[i], array[j]] = [array[j], array[i]];  // 交换元素
        }
        return array;
    },
    getCurrentMinuteTimestamp() {
        const now = new Date();
        now.setSeconds(0, 0); // 将秒数和毫秒数设置为 0
        return now.getTime(); // 返回 Unix 时间戳（毫秒）
    }

}
module.exports = baseService
