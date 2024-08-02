
const moment = require('moment');

const { Sequelize, Op, DataTypes, QueryTypes } = require('sequelize');

const articleModel = require('../../models/article.js');

const article = {
     index: async function (req, res) {
          res.render('admin/article/list', {
               type: req.params.type
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
               if (req.params.type)
                    where.push({
                         type: req.params.type
                    })
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
               let cnt = await articleModel.count({
                    where
               })
               let rows = await articleModel.findAll({
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
          let type = req.params.type;
          let userRow = {
               id: 0
          }
          res.render('admin/article/add', {
               id: 0,

               user: userRow,
               type
          });
     },
     edit: async function (req, res) {
          try {


               let userRow = await articleModel.findOne({
                    where: {
                         id: req.params.id
                    }
               });
               if (userRow) {

                    res.render('admin/article/add', {
                         id: userRow.id,
                         user: userRow,
                         type: userRow.type
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
               await models.articleModel.update({
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


               let row = await articleModel.findOne({
                    where: {
                         id: req.body.id
                    }
               })
               if (row) {
                    let data = {
                         title: req.body.title,
                         content: req.body.content,
                         updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                    }

                    await articleModel.update(data, {
                         where: {
                              id: row.id
                         }
                    })
                    res.send({ code: 0, message: "succes" });
               } else {
                    let user = await articleModel.create({
                         title: req.body.title,
                         content: req.body.content,
                         status: 1,
                         type: req.body.type,
                         created: moment().format("YYYY-MM-DD HH:mm:ss"),
                         updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                    })


                    res.send({ code: 0, message: "succes" });
               }
          } catch (ex) {
               console.error(ex)
               res.send({ code: 500, message: ex.message });
          }
     },

}

module.exports = article;