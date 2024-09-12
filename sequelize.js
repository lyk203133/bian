const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.dbname, process.env.dbuser, process.env.dbpasswd, {
  host: process.env.dbserver,
  dialect: 'mysql',
  pool: {
    max: 40,
    min: 0,
    acquire: 60000,
    idle: 10000
  },
  timezone: '+08:00', // 设置为 UTC+8 的时区
  dialectOptions: {
    //useUTC: false, // 关闭utc时间转换
    timezone: '+08:00' // 设置时区为东八区，即Asia/Shanghai
  }
});

module.exports = sequelize