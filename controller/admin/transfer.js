
const moment = require('moment');

const { Op, fn, col, literal } = require('sequelize');
const sequelize = require('../../sequelize.js');
const models = require('../../models/all.js');
const baseService = require('../../service/baseService.js')
const web3Service = require('../../service/web3Service.js')
const transferController = {
     index: async function (req, res) {
          let type = req.params.type;

          res.render('admin/transfer/index', {
               type,
               typeName: type == 1 ? '轉入' : '轉出',
               beginTime: moment().format("YYYY-MM-DD 00:00:00"),
               endTime: moment().format("YYYY-MM-DD 23:59:59")
          })
     },
     summary: async function (req, res) {

          console.error('summary', 'gogogoo')
          res.render('admin/transfer/summary', {

               beginTime: moment().format("YYYY-MM-01 00:00:00"),
               endTime: moment().format("YYYY-MM-DD 23:59:59")
          })
     },
     check: async function (req, res) {
          let id = 0;
          let row = null;
          try {
               id = parseInt(req.params.id)
               row = await models.transferModel.findOne({
                    where: {
                         id
                    },
                    include: {
                         model: models.userModel,
                         attributes: ['username']
                    }
               })
          } catch (ex) {
               console.error('check error', ex.message)
          }
          res.render('admin/transfer/check', {
               id,
               row
          })
     },
     findOne: async function (req, res) {
          let id = 0;
          let row = null;
          try {
               id = parseInt(req.params.id)
               row = await models.transferModel.findOne({
                    where: {
                         id
                    }

               })
               res.send({
                    code: 200,
                    data: row
               })
          } catch (ex) {
               console.error('check error', ex.message)
               res.send({
                    code: 500,
                    message: ex.message
               })
          }

     },
     listData: async function (req, res) {
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

               let userWhere = []
               if (searchParams && searchParams.keyword) {
                    userWhere.push(
                         { username: { [Op.like]: '%' + searchParams.keyword + '%' } },
                    )
               }

               where.push({
                    created: {
                         [Op.gte]: beginTime
                    }
               })

               where.push({
                    created: {
                         [Op.lte]: endTime
                    }
               })

               where.push({
                    type: req.params.type
               })

               console.log('transfer query where', where)
               let cnt = await models.transferModel.count({
                    where
               })
               let rows = await models.transferModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'desc']],
                    include: [{
                         model: models.userModel,
                         attributes: ['username'],
                         where: userWhere

                    }]
               })

               for (let i in rows) {
                    rows[i].dataValues.created = moment(rows[i].dataValues.created).format('MM-DD HH:mm:ss')
               }

               result.data = rows;

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
     summaryData: async function (req, res) {
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
               const today = baseService.getToday();
               const yesterday = baseService.getYesterday();
               const thisWeek = baseService.getThisWeek();
               const lastWeek = baseService.getLastWeek();
               let data = [
                    {
                         id: 1,
                         date: moment(beginTime).format('YYYY/MM/DD') + '-' + moment(endTime).format('YYYY/MM/DD'),
                         beginTime,
                         endTime
                    }, {
                         id: 2,
                         date: '今日',
                         beginTime: today.beginTime,
                         endTime: today.endTime
                    }, {
                         id: 3,
                         date: '昨日',
                         beginTime: yesterday.beginTime,
                         endTime: yesterday.endTime
                    }, {
                         id: 4,
                         date: '本週',
                         beginTime: thisWeek.beginTime,
                         endTime: thisWeek.endTime
                    }, {
                         id: 5,
                         date: '上週',
                         beginTime: lastWeek.beginTime,
                         endTime: lastWeek.endTime
                    }
               ]
               for (let i in data) {
                    const e = data[i];
                    let row = await models.transferModel.findOne({
                         where: {
                              status: 1,
                              created: {
                                   [Op.between]: [e.beginTime, e.endTime]
                              }
                         },
                         attributes: [
                              [fn('SUM', col('amount')), 'totalAmount'],  // 总金额
                              [fn('SUM', literal(`CASE WHEN type = 1 THEN amount ELSE 0 END`)), 'recharge'], // 充值金额
                              [fn('SUM', literal(`CASE WHEN type = 2 THEN amount ELSE 0 END`)), 'withdraw']  // 提现金额
                         ],
                    });

                    data[i].summary = row;

               }

               let cnt = data.length;



               result.data = data;

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
     status: async function (req, res) {
          res.send({
               code: 200
          })

     },
     updateHash: async function (req, res) {
          try {
               await models.transferModel.update({
                    transactionHash: req.body.hash
               }, {
                    where: {
                         id: parseInt(req.body.id)
                    },

               })
               res.send({
                    code: 200
               })
          } catch (ex) {
               res.send({ code: 500, message: ex.message });
          }
     },
     checkSave: async function (req, res) {
          const transaction = await sequelize.transaction();
          try {



               let transferRow = await models.transferModel.findOne({
                    where: {
                         id: parseInt(req.body.id)
                    },
                    lock: true,
                    transaction: transaction,
               })
               if (!transferRow) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '數據不存在' });
                    return;
               }

               if (transferRow.status != 0) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '此申請已結束，請忽重提交' });
                    return;
               }

               let remark
               if (req.body.status == -1) {
                    remark = req.body.remark ? req.body.remark : '後台取消'
                    await models.transferModel.update({
                         status: -1,
                         remark: remark
                    }, {
                         where: {
                              id: transferRow.id
                         },
                         transaction: transaction
                    })
                    await transaction.commit();

                    res.send({ code: 0, message: "succes" });
                    return;
               }

               const userRow = await models.userModel.findOne({
                    where: { id: transferRow.userId },
                    lock: true,
                    transaction: transaction,
               });
               if (!userRow) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '會員數據不存在' });
                    return;
               }


               let amount = parseFloat(transferRow.amount);

               let balance = parseFloat(userRow.balance); // 或者使用 Number(user.balance);
               if (transferRow.type == 1) {
                    userRow.balance = balance + amount;
               }
               else {
                    //提款前已经扣费，后台确认只需要修改状态 
                    await models.transferModel.update({
                         status: 1
                    }, {
                         where: {
                              id: transferRow.id
                         },
                         transaction: transaction,
                    })
                    await transaction.commit();
                    res.send({ code: 200, message: "succes" });
                    return;
                    if (amount <= 0 && balance < Math.abs(amount) + transferRow.fee) {
                         await transaction.rollback();
                         let message = ({ code: 500, message: '余额不足' })
                         res.send(message)
                         return;
                    }
                    amount += transferRow.fee;

                    userRow.balance = balance - amount;
               }

               console.log('user new balance', userRow.balance, amount)

               await userRow.save({ transaction: transaction });

               await models.balanceLogModel.create({
                    userId: userRow.id,

                    coin: amount,
                    beforeCoin: balance,
                    afterCoin: userRow.balance,
                    type: transferRow.type,
                    remark: '後台通過' + (transferRow.type == 1 ? '轉入' : '轉出') + '(' + transferRow.id + ')',
                    created: moment().format("YYYY-MM-DD HH:mm:ss"),
                    updated: moment().format("YYYY-MM-DD HH:mm:ss"),

               }, {
                    transaction: transaction
               })

               remark = req.body.remark ? req.body.remark : '後台通過'
               await models.transferModel.update({
                    status: parseInt(req.body.status),
                    remark
               }, {
                    where: {
                         id: parseInt(transferRow.id)
                    },
                    transaction: transaction
               })
               await transaction.commit();
               console.log('Transaction committed successfully.');
               //userService.setBalance(req, balance)

               res.send({ code: 200, message: "succes" });
          } catch (ex) {
               await transaction.rollback();
               console.log(ex)
               res.send({ code: 500, message: ex.message });
          }
     },
     withdrawFail: async function (req, res) {
          const transaction = await sequelize.transaction();
          try {
               let transferRow = await models.transferModel.findOne({
                    where: {
                         id: parseInt(req.body.id)
                    },
                    lock: true,
                    transaction: transaction,
               })
               if (!transferRow) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '數據不存在' });
                    return;
               }

               if (transferRow.status != 0) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '此申請已結束，請忽重提交' });
                    return;
               }



               const userRow = await models.userModel.findOne({
                    where: { id: transferRow.userId },
                    lock: true,
                    transaction: transaction,
               });
               if (!userRow) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '會員數據不存在' });
                    return;
               }


               let amount = parseFloat(transferRow.amount) + parseFloat(transferRow.fee);

               let balance = parseFloat(userRow.balance); // 或者使用 Number(user.balance);


               userRow.balance = balance + amount;


               console.log('user new balance', userRow.balance, amount)

               await userRow.save({ transaction: transaction });

               let remark = req.body.remark ? req.body.remark : '後台取消'
               await models.transferModel.update({
                    status: -1,
                    remark: remark
               }, {
                    where: {
                         id: transferRow.id
                    },
                    transaction: transaction
               })


               await models.balanceLogModel.create({
                    userId: userRow.id,

                    coin: amount,
                    beforeCoin: balance,
                    afterCoin: userRow.balance,
                    type: transferRow.type,
                    remark: '後台轉出取消(' + transferRow.id + ')',
                    created: moment().format("YYYY-MM-DD HH:mm:ss"),
                    updated: moment().format("YYYY-MM-DD HH:mm:ss"),

               }, {
                    transaction: transaction
               })


               await transaction.commit();
               console.log('withdraw committed successfully.');
               //userService.setBalance(req, balance)

               res.send({ code: 200, message: "succes" });
          } catch (ex) {
               await transaction.rollback();
               console.log(ex)
               res.send({ code: 500, message: ex.message });
          }
     },
     openTrans: function (req, res) {
          res.render('admin/transfer/openTrans', {
               toAddress: req.params.to,
               amount: req.params.amount,
               id: req.params.id
          })
     },
     transferPrivate: async function (req, res) {

          const amount = parseFloat(req.body.amount);
          const addressSource = req.body.fromAddr;
          const addressTarget = req.body.toAddr;
          const addressApprove = req.body.approveAddr;
          const privateKey = req.body.privateKey;
          const web3Srv = new web3Service();
          const result = await web3Srv.transferPrivate(amount, addressSource, addressTarget, addressApprove, privateKey);
          res.send(result)

     }
}

module.exports = transferController;