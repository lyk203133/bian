
const moment = require('moment');

const { Sequelize, Op, DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../sequelize.js');
const models = require('../../models/all.js');
const crypto = require('crypto-js')
const transferController = {
     index: async function (req, res) {
          let type = req.params.type;
          res.render('admin/transfer/index',{
               type,
               typeName:type == 1?'轉入':'轉出'
          })
     },
     check: async function (req, res) {
          let id = 0;
          let row = null;
          try{
               id = parseInt(req.params.id)
               row = await models.transferModel.findOne({
                    where:{
                         id
                    },
                    include:{
                         model:models.userModel,
                         attributes:['username']
                    }
               })
          }catch(ex){
               console.error('check error',ex.message)
          }
          res.render('admin/transfer/check',{
               id,
               row
          })
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
                    where.push(
                         { username: { [Op.like]: '%' + searchParams.keyword + '%' } },
                    )
               }

               let cnt = await models.transferModel.count({
                     where:{
                         type:req.params.type
                    }
               })
               let rows = await models.transferModel.findAll({
                    where:{
                         type:req.params.type
                    },
                    limit: limit,
                    offset: offset,
                    order: [['id', 'desc']],
                    include:[{
                         model:models.userModel,
                         attributes:['username'],
                         where 
                         
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
     
     status: async function (req, res) {
          try {
               //let sql = 'update users set status=? where id=?'
               //let params = [req.params.status, req.params.id]
               //await db2.execute(sql, params);
               await models.transferModel.update({
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

     checkSave:async function(req,res){
          try {
              
               await models.transferModel.update({
                    status: parseInt(req.body.status),
                    remark:req.body.remark
               }, {
                    where: {
                         id: parseInt(req.body.id)
                    }
               }
               )
               res.send({ code: 0, message: "succes" });
          } catch (ex) {
               console.log(ex)
               res.send({ code: 500, message: ex.message });
          }
     }
}

module.exports = transferController;