
const moment = require('moment');

const { Sequelize, Op, DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../sequelize.js');
const userModel = require('../../models/user.js');
const levelModel = require('../../models/level.js');
const crypto = require('crypto-js')
const level = {
     index: async function (req, res) {
          res.render('admin/level/list')
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
               if (searchParams && searchParams.keyword) {
                    where.push({
                         [Op.or]: [
                              { username: { [Op.like]: '%' + searchParams.keyword + '%' } },
                              { linename: { [Op.like]: '%' + searchParams.keyword + '%' } }
                         ]
                    })
               }
               /*where.push({
                    RegisterDate: {
                         [Op.between]: [beginTime, endTime]
                    }

               })*/
               let cnt = await levelModel.count({
                    where
               })
               let rows = await levelModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'asc']]
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
     add: async function (req, res) {

          let userRow = {
               id: 0
          }
          res.render('admin/level/add', {
               id: 0,

               user: userRow
          });
     },
     edit: async function (req, res) {
          try {


               let userRow = await levelModel.findOne({
                    where: {
                         id: req.params.id
                    }
               });
               if (userRow) {

                    res.render('admin/level/add', {
                         id: userRow.id,
                         user: userRow,

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
               await models.levelModel.update({
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


               let row = await levelModel.findOne({
                    where: {
                         id: req.body.id
                    }
               })
               if (row) {
                    let data = {
                         coin: req.body.coin,
                         profit: req.body.profit,
                         clickfee: req.body.clickfee,
                         powerfee: req.body.powerfee
                    }

                    await levelModel.update(data, {
                         where: {
                              id: row.id
                         }
                    })
                    res.send({ code: 0, message: "succes" });
               } else {
                    let user = await levelModel.create({
                         id: parseInt(req.body.id),
                         lv: req.body.lv,
                         coin: req.body.coin,
                         profit: req.body.profit,
                         powerProfit: req.body.powerProfit,
                         clickfee: req.body.clickfee,
                         powerfee: req.body.powerfee,
                         max: 0,
                         cardfee: 0
                    })


                    res.send({ code: 0, message: "succes" });
               }
          } catch (ex) {
               console.error(ex)
               res.send({ code: 500, message: ex.message });
          }
     },

}

module.exports = level;