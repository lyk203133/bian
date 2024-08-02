const db = require('../../db2.js')
const crypto = require('crypto-js')
const bodyParser = require('body-parser');
const svgCaptcha = require('svg-captcha');

const moment = require("moment");
const Sequelize = require('sequelize');
const models = require("../../models/account/AccountAll.js");
const sequelize = require('../../sequelize.js')
const login = {
     index: async (req, res) => {
          res.render('agent/login', {
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
          }

          try {

               let row = await models.memberModel.findOne({
                    where: {
                         Accounts: userName,
                         LogonPass: crypto.MD5(password).toString().toLowerCase()
                    }
               });
               if (row) {
                    req.session.agentId = row.UserID
                    req.session.agentUser = userName
                    req.session.role = 'agent'
                    res.statusCode = 200;
                    res.send({ code: 200, message: 'success' })
               } else {
                    res.send({ code: 401, message: '密码不正确' })
               }

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
               res.redirect('/agent/login');
          });
     },
     captcha: async function (req, res) {
          var captcha = svgCaptcha.create({
               size: 4, // size of random string
               ignoreChars: '0o1i', // filter out some characters like 0o1i
               noise: 1,// number of noise lines
               color: true, // characters will have distinct colors instead of grey, true if background option is set
               background: '#cc9966' // background color of the svg image
          });

          req.session.captcha = captcha.text.toLowerCase();
          res.type('svg');
          res.status(200).send(captcha.data);
     },
}

module.exports = login;