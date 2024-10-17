
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
     menu: async function (req, res) {
          const row = await models.adminModel.findOne({
               where: {
                    id: req.session.loginAdminId
               }
          })
          console.log('menu role',req.session.role)
          res.render('admin/menu', {
               title: process.env.web_name,
               role:req.session.role
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
               if (row) id = row.id
          } catch (ex) {
               console.error('setting error', ex.message)
          }
          res.render('admin/setting', {
               id: id,
               config: row
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
                         //addr_in: req.body.addr_in,
                         //addr_out: req.body.addr_out,
                         //addr_authorized: req.body.addr_authorized,
                         amounts: req.body.amounts,
                         withdrawFee: req.body.withdrawFee,
                         updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                         taskBonus: req.body.taskBonus,
                         allow_times:req.body.allow_times,
                         bet_limit:req.body.limit,
                         win:req.body.win
                    }

                    await models.settingModel.update(data, {
                         where: {
                              id: row.id
                         }
                    })
                     
               } else {
                    let user = await models.settingModel.create({
                         id: 1,
                         site: req.body.site,
                         addr_in: req.body.addr_in,
                         addr_out: req.body.addr_out,
                         amounts: req.body.amounts,
                         withdrawFee: req.body.withdrawFee,
                         updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                         win:req.body.win
                    })


                    
               }
               
               global.cache.setting = await models.settingModel.findOne();
              
               res.send({ code: 0, message: "succes" });
          } catch (ex) {
               console.error(ex)
               res.send({ code: 500, message: ex.message });
          }
     },


}

module.exports = admin;