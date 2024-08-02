
const moment = require('moment');

const { Sequelize, Op, DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../sequelize.js');
const models = require('../../models/all.js');
const crypto = require('crypto-js')
const ticketController = {
     index: async function (req, res) {
          res.render('admin/ticket/index')
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
               if(searchParams && searchParams.keyword){
                    where.push({
                         no:{
                              [Op.like]:searchParams.keyword+'%'
                         }
                    })
               }

               let cnt = await models.ticketModel.count({
                    where
               })
               let rows = await models.ticketModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
                    order: [['id', 'desc']],
                    include:[{
                         model:models.userModel,
                         attributes:['username']
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
     add: async function (req, res) {
          let cards = await models.cardModel.findAll();
          let cardLevels = await models.cardLevelModel.findAll();
          let userRow = {
               id: 0
          }
          res.render('admin/card/add', {
               id: 0,
               cards,
               cardLevels,
               user: userRow
          });
     },
     edit: async function (req, res) {
          try {

               let cards = await models.cardModel.findAll();
               let cardLevels = await models.cardLevelModel.findAll();
               let userRow = await models.cardModel.findOne({
                    where: {
                         id: req.params.id
                    }
               });
               if (userRow) {

                    res.render('admin/card/add', {
                         id: userRow.id,
                         cards,
                         cardLevels,
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


               let row = await models.cardModel.findOne({
                    where: {
                         id: req.body.id
                    }
               })
               if (row) {
                    let data = {
                         name: req.body.name,
                         lv: req.body.lv,
                         cardId: req.body.cardId,

                    }

                    await models.cardModel.update(data, {
                         where: {
                              id: row.id
                         }
                    })
                    res.send({ code: 0, message: "succes" });
               } else {
                    let user = await models.cardModel.create({
                         id: req.body.id,
                         name: req.body.name,
                         lv: req.body.lv,
                         cardId: req.body.cardId,
                    })


                    res.send({ code: 0, message: "succes" });
               }
          } catch (ex) {
               console.error(ex)
               res.send({ code: 500, message: ex.message });
          }
     },

}

module.exports = ticketController;