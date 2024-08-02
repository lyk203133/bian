
const moment = require('moment');

const { Sequelize, Op, DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../sequelize.js');
const models = require('../../models/all.js');
const crypto = require('crypto-js')
const cardLevel = {
     index: async function (req, res) {
          res.render('admin/card/card_level')
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

               let cnt = await models.cardLevelModel.count({
                    where
               })
               let rows = await models.cardLevelModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'asc']]
               })

               if (rows) {

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
          res.render('admin/card/card_level_add', {
               id: 0,

               user: userRow
          });
     },
     edit: async function (req, res) {
          try {


               let userRow = await models.cardLevelModel.findOne({
                    where: {
                         id: req.params.id
                    }
               });
               if (userRow) {

                    res.render('admin/card/card_level_add', {
                         id: userRow.id,
                         user: userRow,

                    });
               }
          } catch (ex) {
               console.log(ex)
               res.send({ code: 500, message: ex.message });
          }

     },

     save: async function (req, res) {
          try {


               let row = await models.cardLevelModel.findOne({
                    where: {
                         id: req.body.id
                    }
               })
               if (row) {
                    let data = {
                         coin: req.body.coin,
                         profit: req.body.profit,

                    }

                    await models.cardLevelModel.update(data, {
                         where: {
                              id: row.id
                         }
                    })
                    res.send({ code: 0, message: "succes" });
               } else {
                    let user = await models.cardLevelModel.create({
                         id: parseInt(req.body.id),

                         coin: req.body.coin,
                         profit: req.body.profit,

                    })


                    res.send({ code: 0, message: "succes" });
               }
          } catch (ex) {
               console.error(ex)
               res.send({ code: 500, message: ex.message });
          }
     },

}

module.exports = cardLevel;