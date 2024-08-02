
const moment = require('moment');
const { Sequelize, Op, DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../sequelize.js');
const models = require('../../models/all.js');

const admin = {
     index: async function (req, res) {
          let menu = 'init.json'
          if (req.session.role == 1)
               menu = 'agent.json'

          res.render('admin/index', {
               title: process.env.web_name,
               menu: menu,
               loginName: req.session.loginUser
          })
     },
     main: async function (req, res) {
          res.render('admin/main', {
               title: process.env.web_name
          })
     },
     setting: async function (req, res) {
          let row;
          let id;
          try {
                row = await models.settingModel.findOne({
                    where: {
                         id: 1
                    }
               })
               if(row) id = row.id
          }catch(ex){
               console.error('setting error',ex.message)
          }
          res.render('admin/setting', {
               id:id,
               config:row
          })
     },
     settingSave: async function (req, res) {
          try {
               let row = await models.settingModel.findOne({
                    where: {
                         id: 1
                    }
               })
               if (row) {
                    let data = {
                         site: req.body.site,
                         addr_in: req.body.addr_in,
                         addr_out: req.body.addr_out,
                         amounts:req.body.amounts,
                         updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                    }

                    await models.settingModel.update(data, {
                         where: {
                              id: row.id
                         }
                    })
                    res.send({ code: 0, message: "succes" });
               } else {
                    let user = await models.settingModel.create({
                         id: 1,
                         site: req.body.site,
                         addr_in: req.body.addr_in,
                         addr_out: req.body.addr_out,
                         amounts:req.body.amounts,
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

module.exports = admin;