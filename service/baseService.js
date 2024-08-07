
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
    getWholeMinute: function (seconds = 60) {
        // 获取当前时间  
        let now = moment();

        // 减去一分钟  
        let oneMinuteAgo = now.format("YYYY-MM-DD HH:mm:00");
        let oneMinuteFuture = now.add(seconds,'seconds').format("YYYY-MM-DD HH:mm:00");

        // 转换为Unix时间戳（毫秒）  
        let timestampAgo = moment(oneMinuteAgo).unix() * 1000; // 或者使用 oneMinuteAgo.unix() * 1000  
        let timestampFuture = moment(oneMinuteFuture).unix() * 1000; // 或者使用 oneMinuteAgo.unix() * 1000  

        return {
            oneMinuteAgo,
            oneMinuteFuture,
            timestampAgo,
            timestampFuture
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
    }

}
module.exports = baseService
