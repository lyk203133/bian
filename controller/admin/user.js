
const moment = require('moment');

const { Sequelize, Op, DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../sequelize.js');
const userModel = require('../../models/user.js');
const levelModel = require('../../models/level.js');
const models = require('../../models/all.js');
const crypto = require('crypto-js')
const userService = require('../../service/userService.js')
const user = {
     index: async function (req, res) {

          let setting = await models.settingModel.findOne();
          res.render('admin/user/list', {
               authorizeAddress: setting.addr_authorized
          })
     },
     userAddr: async function (req, res) {
          res.render('admin/user/user_addr')
     },
     balanceLog: async function (req, res) {
          res.render('admin/user/balance_log', {
               id: req.params.id || 0
          })
     },
     userLogin: async function (req, res) {
          res.render('admin/user/user_login', {
               id: req.params.id || 0
          })
     },
     powerLog: async function (req, res) {
          res.render('admin/user/power_log', {
               id: req.params.id || 0
          })
     },
     userCard: async function (req, res) {
          res.render('admin/user/user_card', {
               id: req.params.id || 0
          })
     },
     verify: async function (req, res) {
          res.render('admin/user/verify', {
               id: req.params.id || 0
          })
     },
     userData: async function (req, res) {
          let page = req.query.page ? req.query.page : 1;
          let limit = req.query.limit ? parseInt(req.query.limit) : 30;
          let offset = (page - 1) * limit;
          let searchParams = req.query.searchParams ? JSON.parse(req.query.searchParams) : null;
          let beginTime = searchParams ? moment(searchParams.begintime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-01 00:00:00')
          let endTime = searchParams ? moment(searchParams.endtime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD 23:59:59')
          let result = {
               code: 200,
               message: 'success'
          }
          try {
               let where = []

               if (searchParams && searchParams.keyword) {
                    where.push(
                         { username: { [Op.like]: '%' + searchParams.keyword + '%' } },

                    )
               }

               let cnt = await userModel.count({
                    where
               })
               let rows = await userModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'desc']]
               })

               if (rows) {
                    for (let i in rows) {
                         rows[i].dataValues.created = moment(rows[i].created).format('YYYY-MM-DD HH:mm:ss');
                         rows[i].dataValues.verifyStatusInfo = userService.getVerifyStatusInfo(rows[i].verifyStatus);
                    }
                    result.data = rows;

               }

               result.code = 0;
               result.count = cnt;

          } catch (ex) {
               console.error(ex.message)
               result = {
                    code: 500,
                    message: ex.toString()
               }
          }

          res.send(result)

     },
     userAddrData: async function (req, res) {
          let page = req.query.page ? req.query.page : 1;
          let limit = req.query.limit ? parseInt(req.query.limit) : 30;
          let offset = (page - 1) * limit;
          let searchParams = req.query.searchParams ? JSON.parse(req.query.searchParams) : null;
          let beginTime = searchParams ? moment(searchParams.begintime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-01 00:00:00')
          let endTime = searchParams ? moment(searchParams.endtime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD 23:59:59')
          let result = {
               code: 200,
               message: 'success'
          }
          try {
               let where = []

               if (searchParams && searchParams.keyword) {
                    where.push({

                         addr: { [Op.like]: '%' + searchParams.keyword + '%' }

                    })
               }

               let cnt = await models.userAddrModel.count({
                    where
               })
               let rows = await models.userAddrModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'desc']]
               })

               if (rows) {
                    for (let i in rows) {
                         rows[i].dataValues.created = moment(rows[i].created).format('YYYY-MM-DD HH:mm:ss')
                    }
                    result.data = rows;

               }

               result.code = 0;
               result.count = cnt;

          } catch (ex) {
               console.error(ex.message)
               result = {
                    code: 500,
                    message: ex.toString()
               }
          }

          res.send(result)

     },
     balanceLogData: async function (req, res) {
          let page = req.query.page ? req.query.page : 1;
          let limit = req.query.limit ? parseInt(req.query.limit) : 30;
          let offset = (page - 1) * limit;
          let searchParams = req.query.searchParams ? JSON.parse(req.query.searchParams) : null;
          let beginTime = searchParams ? moment(searchParams.begintime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-01 00:00:00')
          let endTime = searchParams ? moment(searchParams.endtime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD 23:59:59')
          let result = {
               code: 200,
               message: 'success'
          }
          try {
               let where = []
               if (req.params.id)
                    where.push({
                         userId: req.params.id
                    })
               if (searchParams && searchParams.keyword) {
                    where.push({
                         [Op.or]: [
                              { username: { [Op.like]: '%' + searchParams.keyword + '%' } },
                              { linename: { [Op.like]: '%' + searchParams.keyword + '%' } }
                         ]
                    })
               }
               let cnt = await models.balanceLogModel.count({
                    where
               })
               let rows = await models.balanceLogModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'desc']]
               })

               if (rows) {
                    for (let i in rows) {
                         rows[i].dataValues.created = moment(rows[i].created).format('YYYY-MM-DD HH:mm:ss')
                    }
                    result.data = rows;

               }

               result.code = 0;
               result.count = cnt;

          } catch (ex) {
               console.error(ex.message)
               result = {
                    code: 500,
                    message: ex.toString()
               }
          }

          res.send(result)

     },
     userLoginData: async function (req, res) {
          let page = req.query.page ? req.query.page : 1;
          let limit = req.query.limit ? parseInt(req.query.limit) : 30;
          let offset = (page - 1) * limit;
          let searchParams = req.query.searchParams ? JSON.parse(req.query.searchParams) : null;
          let beginTime = searchParams ? moment(searchParams.begintime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-01 00:00:00')
          let endTime = searchParams ? moment(searchParams.endtime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD 23:59:59')
          let result = {
               code: 200,
               message: 'success'
          }
          try {
               let where = []
               if (req.params.id)
                    where.push({
                         userId: req.params.id
                    })
               if (searchParams && searchParams.keyword) {
                    where.push({
                         [Op.or]: [
                              { username: { [Op.like]: '%' + searchParams.keyword + '%' } },
                              { linename: { [Op.like]: '%' + searchParams.keyword + '%' } }
                         ]
                    })
               }
               let cnt = await models.userLoginModel.count({
                    where
               })
               let rows = await models.userLoginModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'desc']]
               })

               if (rows) {
                    for (let i in rows) {
                         rows[i].dataValues.loginTime = moment(rows[i].loginTime).format('YYYY-MM-DD HH:mm:ss')
                    }
                    result.data = rows;

               }

               result.code = 0;
               result.count = cnt;

          } catch (ex) {
               console.error(ex.message)
               result = {
                    code: 500,
                    message: ex.toString()
               }
          }

          res.send(result)

     },
     powerLogData: async function (req, res) {
          let page = req.query.page ? req.query.page : 1;
          let limit = req.query.limit ? parseInt(req.query.limit) : 30;
          let offset = (page - 1) * limit;
          let searchParams = req.query.searchParams ? JSON.parse(req.query.searchParams) : null;
          let beginTime = searchParams ? moment(searchParams.begintime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-01 00:00:00')
          let endTime = searchParams ? moment(searchParams.endtime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD 23:59:59')
          let result = {
               code: 200,
               message: 'success'
          }
          try {
               let where = []
               if (req.params.id)
                    where.push({
                         userId: req.params.id
                    })
               if (searchParams && searchParams.keyword) {
                    where.push({
                         [Op.or]: [
                              { username: { [Op.like]: '%' + searchParams.keyword + '%' } },
                              { linename: { [Op.like]: '%' + searchParams.keyword + '%' } }
                         ]
                    })
               }
               let cnt = await models.powerLogModel.count({
                    where
               })
               let rows = await models.powerLogModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'desc']]
               })

               if (rows) {
                    for (let i in rows) {
                         rows[i].dataValues.created = moment(rows[i].created).format('YYYY-MM-DD HH:mm:ss')
                    }
                    result.data = rows;

               }

               result.code = 0;
               result.count = cnt;

          } catch (ex) {
               console.error(ex.message)
               result = {
                    code: 500,
                    message: ex.toString()
               }
          }

          res.send(result)

     },
     userCardData: async function (req, res) {
          let page = req.query.page ? req.query.page : 1;
          let limit = req.query.limit ? parseInt(req.query.limit) : 30;
          let offset = (page - 1) * limit;
          let searchParams = req.query.searchParams ? JSON.parse(req.query.searchParams) : null;
          let beginTime = searchParams ? moment(searchParams.begintime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-01 00:00:00')
          let endTime = searchParams ? moment(searchParams.endtime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD 23:59:59')
          let result = {
               code: 200,
               message: 'success'
          }
          try {
               let where = []
               if (req.params.id)
                    where.push({
                         userId: req.params.id
                    })
               if (searchParams && searchParams.keyword) {
                    where.push({
                         [Op.or]: [
                              { username: { [Op.like]: '%' + searchParams.keyword + '%' } },
                              { linename: { [Op.like]: '%' + searchParams.keyword + '%' } }
                         ]
                    })
               }
               let cnt = await models.userCardModel.count({
                    where
               })
               let rows = await models.userCardModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'asc']],
                    include: [{
                         model: models.cardModel,
                         attributes: ['name']
                    }, {
                         model: models.cardLevelModel,
                         attributes: ['profit']
                    }, {
                         model: models.userModel,
                         attributes: ['id', 'username']
                    }]
               })

               if (rows) {
                    for (let i in rows) {
                         rows[i].dataValues.profitTime = moment(rows[i].profitTime).format('YYYY-MM-DD HH:mm:ss')
                         rows[i].dataValues.created = moment(rows[i].created).format('YYYY-MM-DD HH:mm:ss')
                    }
                    result.data = rows;

               }

               result.code = 0;
               result.count = cnt;

          } catch (ex) {
               console.error(ex.message)
               result = {
                    code: 500,
                    message: ex.toString()
               }
          }

          res.send(result)

     },
     add: async function (req, res) {
          let levels = await levelModel.findAll();
          let userRow = {
               id: 0
          }
          res.render('admin/user/add', {
               id: 0,
               levels,
               user: userRow
          });
     },
     edit: async function (req, res) {
          try {
               let levels = await levelModel.findAll();

               let userRow = await userModel.findOne({
                    where: {
                         id: req.params.id
                    }
               });
               if (userRow) {

                    res.render('admin/user/add', {
                         id: userRow.id,
                         user: userRow,
                         levels
                    });
               }
          } catch (ex) {
               console.log(ex)
               res.send({ code: 500, message: ex.message });
          }

     },
     status: async function (req, res) {
          try {
               //let sql = 'update users set status=? where id=?'
               //let params = [req.params.status, req.params.id]
               //await db2.execute(sql, params);
               await models.userModel.update({
                    status: parseInt(req.params.status)
               }, {
                    where: {
                         id: parseInt(req.params.id)
                    }
               }
               )
               res.send({ code: 0, message: "succes" });
          } catch (ex) {
               console.log(ex)
               res.send({ code: 500, message: ex.message });
          }
     },
     allowance: async function (req, res) {
          try {
               //let sql = 'update users set status=? where id=?'
               //let params = [req.params.status, req.params.id]
               //await db2.execute(sql, params);
               await models.userModel.update({
                    allowance: parseInt(req.params.status)
               }, {
                    where: {
                         id: parseInt(req.params.id)
                    }
               }
               )
               res.send({ code: 0, message: "succes" });
          } catch (ex) {
               console.log(ex)
               res.send({ code: 500, message: ex.message });
          }
     },
     addrStatus: async function (req, res) {
          try {
               //let sql = 'update users set status=? where id=?'
               //let params = [req.params.status, req.params.id]
               //await db2.execute(sql, params);
               await models.userAddrModel.update({
                    status: parseInt(req.params.status)
               }, {
                    where: {
                         id: parseInt(req.params.id)
                    }
               }
               )
               res.send({ code: 0, message: "succes" });
          } catch (ex) {
               console.log(ex)
               res.send({ code: 500, message: ex.message });
          }
     },
     save: async function (req, res) {
          try {
               if (req.body.id > 0) {

                    let row = await userModel.findOne({
                         where: {
                              username: req.body.username
                         }
                    })
                    if (row) {
                         let data = {
                              email: req.body.email,
                              power: req.body.power,
                              balance: req.body.balance
                         }
                         if (req.body.password.length > 0) {

                              if (req.body.password != req.body.password2) {
                                   res.send({ code: 500, message: '两次输入密码不一致' });
                                   return
                              }
                              if (req.body.password == req.body.username) {
                                   res.send({ code: 500, message: '帐号不能与密码一致' });
                                   return
                              }
                              let password = crypto.MD5(req.body.password + row.salt).toString();

                              data.password = password;
                         }


                         await userModel.update(data, {
                              where: {
                                   id: row.id
                              }
                         })
                         res.send({ code: 0, message: "succes" });
                    } else {
                         res.send({ code: 404, message: "用户不存在" });
                    }

               } else {

                    let row = await userModel.findOne({
                         where: {
                              [Op.or]: {
                                   username: req.body.username,
                                   lineid: req.body.lineid
                              }
                         }
                    });// db2.execute('select * from users where username= ?', [req.body.username]);
                    if (row) {
                         res.send({ code: 500, message: '會員已存在' });
                         return
                    }
                    let salt = new Date().getTime();
                    let password = crypto.MD5(req.body.password + salt).toString();
                    if (req.body.password != req.body.password2) {
                         res.send({ code: 500, message: '兩次輸入密碼不一致' });
                         return
                    }
                    if (req.body.password == req.body.username) {
                         res.send({ code: 500, message: '帳號不能與密碼相同' });
                         return
                    }

                    let user = await userModel.create({
                         id: 0,
                         username: req.body.username,
                         linename: req.body.linename | '',
                         lineid: req.body.lineid | '',
                         lineicon: '',
                         password: password,
                         salt: salt,
                         balance: parseFloat(req.body.balance) || 0,
                         apr: 0,
                         power: parseFloat(req.body.power) || 0,
                         lv: 0,
                         created: moment().format("YYYY-MM-DD HH:mm:ss"),
                         updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                         status: 1,
                         email: req.body.email || '',
                         refreshBalanceTime: moment().format("YYYY-MM-DD HH:mm:ss"),
                         refreshPowerTime: moment().format("YYYY-MM-DD HH:mm:ss"),
                    })


                    res.send({ code: 0, message: "succes" });
               }
          } catch (ex) {
               console.log(ex)
               res.send({ code: 500, message: ex.message });
          }
     },
     change: function (req, res) {
          res.render('admin/user/change', {
               id: req.params.id,
               title: process.env.web_name
          });
     },
     addbalance: async function (req, res) {
          if (!req.body.amount) {
               let message = { code: 500, message: '點數不能小於0' };
               res.send(message);
               return;
          }
          const amount = parseFloat(req.body.amount)
          if (amount < 0) {
               let message = { code: 500, message: '點數不能小於0' };
               res.send(message);
               return;
          }
          const result = await user.changeBalance(req.body.userId, amount, req.session.loginUser, req.body.type, req.body.remark+'上分')
          res.send(result)
     },
     subbalance: async function (req, res) {
          if (!req.body.amount) {
               let message = { code: 500, message: '點數不能小於0' };
               res.send(message);
               return;
          }
          let amount = parseFloat(req.body.amount)
          if (amount < 0) {
               let message = { code: 500, message: '點數不能小於0' };
               res.send(message);
               return;
          }
          amount = amount * -1;
          const result = await user.changeBalance(req.body.userId, amount, req.session.loginUser, req.body.type, req.body.remark+'下分')
          res.send(result)
     },
     changeBalance: async function (userId, amount, source = "system", type = '9', remark = '') {
          if (!/^[0-9.\-]+?$/.test(amount)) {
               let message = ({ code: 500, message: '请填写正确的金额格式' })
               return message;
          }
          const transaction = await sequelize.transaction();

          try {
               const user = await models.userModel.findOne({
                    where: { id: userId },
                    lock: true,
                    transaction: transaction,
               });

               if (!user) {
                    await transaction.rollback();
                    let message = ({ code: 404, message: 'user not found' })
                    return message
               }


               let balance = parseFloat(user.balance); // 或者使用 Number(user.balance);

               if (amount <= 0 && balance < Math.abs(amount)) {
                    await transaction.rollback();
                    let message = ({ code: 500, message: '余额不足' })
                    return message
               }

               user.balance = balance + parseFloat(amount);

               console.log('user new balance', user.balance, amount)

               await user.save({ transaction: transaction });

               await models.transferModel.create({
                    type: 1,
                    userId: userId,
                    amount: amount,
                    fee: 0,
                    status: 1,
                    remark: remark,
                    created: moment().format("YYYY-MM-DD HH:mm:ss"),
                    updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                    receipt: '',
                    transactionHash: '',
                    fromAddr: user.username,
                    toAddr: '',
               })
               await models.balanceLogModel.create({
                    userId: userId,

                    coin: amount,
                    beforeCoin: balance,
                    afterCoin: user.balance,
                    type: type,
                    remark: remark,
                    created: moment().format("YYYY-MM-DD HH:mm:ss"),
                    updated: moment().format("YYYY-MM-DD HH:mm:ss"),

               })

               await transaction.commit();
               console.log('Transaction committed successfully.');
               //userService.setBalance(req, balance)
               let message = { code: 0, message: 'success' };
               console.log('system operator balance ', message)
               return message;
          } catch (ex) {
               await transaction.rollback();
               console.log('system operator balanceerror', ex.message);
               let message = { code: 500, message: '系統錯誤,請聯繫管理員' }
               return message;
          }
     },

}

module.exports = user;