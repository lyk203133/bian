console.log('env', require('path').resolve(__dirname, '.env'));
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });

var express = require('express');
const bodyParser = require('body-parser');

const moment = require('moment');



//const accountModel = require('./models/accounts/Accounts.js')
var app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const adminRouter = require('./routes/admin.js')
//const agentRouter = require('./routes/agent.js')
//const apiRouter = require('./routes/api.js')
const webRouter = require('./routes/web.js')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

var identityKey = process.env.identityKey;
const session = require('express-session');
const FileStore = require('session-file-store')(session);
app.use(session({
  name: identityKey,
  secret: 'cocos-lp',  // 用来对session id相关的cookie进行签名
  store: new FileStore(),  // 本地存储session（文本文件，也可以选择其他store，比如redis的）
  saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
  resave: false,  // 是否每次都重新保存会话，建议false
  cookie: {
    maxAge: process.env.debug == 'true' ? 100000000 : 60 * 60 * 1000  // 有效期，单位是毫秒
  }
}));

app.use(adminRouter);
//app.use(agentRouter);
//app.use(apiRouter);
app.use(webRouter);
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//app.use('/im/public', express.static('public'));
console.log(path.join(__dirname, 'public'))
//app.use(publicPath, express.static(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('etag', 'strong'); // 或者使用自定义ETag生成函数

console.log(process.env.server_port)
let port = process.env.server_port
var server = app.listen(port, function () {
  var host = '127.0.0.1'
  var port = process.env.server_port
  console.log("http://%s:%s", host, port)
})


const querystring = require('querystring');

const encodedUrl = 'https%3A%2F%2Fexample.com%2F%3Fname%3D%E5%BC%A0%E4%B8%89';

const decodedUrl = querystring.unescape(encodedUrl);
console.log(decodedUrl);
const str = querystring.stringify({ url: decodedUrl })
const str2 = querystring.unescape(str);

console.log(str, str2);