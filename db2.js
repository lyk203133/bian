// get the client
const mysql = require('mysql2');
require('dotenv').config()
const pool = mysql.createPool({
  host: process.env.dbserver,
  user: process.env.dbuser,
  password: process.env.dbpasswd,
  database: process.env.dbname,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  timezone: '+08:00' // 设置时区为UTC+8
});

let promisePool = pool.promise();
module.exports = promisePool; 
