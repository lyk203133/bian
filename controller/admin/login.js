const db = require('../../db2.js')
const crypto = require('crypto-js')
const bodyParser = require('body-parser');
const svgCaptcha = require('svg-captcha');

const moment = require("moment");
const adminModel = require('../../models/admin.js')

const login = {
     index: async (req, res) => {
          res.render('admin/login', {
               title: process.env.web_name
          })
     },
     heartbeat: async (req, res) => {
          if (!req.session.loginId) {
               res.send({
                    code: 401,
                    message: 'session expire'
               })
               return
          } else {
               req.session.lastAccess = moment().format('YYYY-DD-DD HH:mm:ss');
               res.send({
                    code: 0,
                    message: 'login',
                    lastAccess: req.session.lastAccess
               })
          }
     },
     checklogin: async (req, res) => {
          //log.writeLog('checklogin:' + JSON.stringify(req.body))
          let userName = req.body.username;
          let password = req.body.password;
          let code = req.body.code;
          try {
               if (!code || !req.session.captcha || code.toLowerCase() != req.session.captcha.toLowerCase()) {
                    res.send({ code: 403, message: '验证码错误' })
                    return;
               }
          } catch (ex) {
               //log.writeLog('checklogin error:' + ex.message + JSON.stringify(req.body))
               res.send({ code: 403, message: '验证码错误' })
               return;
          }

          try {
               let admin = await adminModel.findOne({
                    where: {
                         username: userName
                    }
               })
               if (!admin) {
                    res.send({ code: 403, message: '登入失敗' })
                    return;
               }
               let chkpassword = crypto.MD5(password + admin.salt).toString();

               if (chkpassword == admin.password) {
                    req.session.loginAdminId = admin.id;
                    req.session.loginAdminUser = userName;
                    req.session.role = admin.role;
                    res.statusCode = 200;
                    res.send({ code: 200, message: '登入成功' })
                    return;


               }
               res.send({ code: 401, message: 'login fail' })
               return;
          } catch (ex) {
               //log.writeLog('checklogin error:' + ex.message + JSON.stringify(req.body))
               res.send({ code: 401, message: 'login fail' })
          }


     },
     logout: async (req, res) => {
          req.session.destroy(function (err) {
               if (err) {
                    res.json({ ret_code: 2, ret_msg: '退出登录失败' });
                    return;
               }

               //req.session.admin = null;
               res.clearCookie(process.env.identityKey);
               res.redirect('/admin/login');
          });
     },
     captcha: async function (req, res) {
          var captcha = svgCaptcha.create({
               size: 4, // size of random string
               //ignoreChars: '0o1i', // filter out some characters like 0o1i
               noise: 3,// number of noise lines
               color: true, // characters will have distinct colors instead of grey, true if background option is set
               background: '#ccc' // background color of the svg image
          });

          req.session.captcha = captcha.text.toLowerCase();
          res.type('svg');
          res.status(200).send(captcha.data);
     },
}

module.exports = login;