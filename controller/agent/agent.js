
const moment = require('moment');
const ChineseRandomName = require('chinese-random-name');
const { Sequelize, Op, DataTypes, QueryTypes } = require('sequelize');
const { accountDb, treasureDb, gameScoreDb } = require('../../sequelize.js');
const models = require('../../models/account/AccountAll.js');
const { sequelize } = require('../../models/account/Agent.js');
const ClubRuleModel = require('../../models/treasure/ClubRule.js');
const axios = require('axios');
const agent = {
     index: async function (req, res) {
          let menu = 'agent.json'
          if (req.session.role == 1)
               menu = 'agent.json'

          res.render('agent/index', {
               title: process.env.web_name,
               menu: menu,
               loginName: req.session.loginUser
          })
     },
     main: async function (req, res) {
          res.render('agent/main', {
               title: process.env.web_name
          })
     },
     gameSave: async function (req, res) {
          console.log(req.body)
          let clubId = parseInt(req.body.clubId);
          let kindId = parseInt(req.body.id);
          let androidCnt = parseInt(req.body.androidCnt);
          let rule = '0000000000000000000000000000000000000000000000000000000000000000';

          let row = await ClubRuleModel.findOne({
               where: {
                    ClubID: clubId,
                    KindID: kindId
               }
          })
          if (row) rule = row.Rules;

          let newRule = agent.setRule(Buffer.from(rule, 'hex'), androidCnt)
          if (!row) {
               try {
                    row = {
                         ClubID: clubId,
                         KindID: kindId,
                         Flag1: 0,
                         Flag2: 0,
                         Rules: newRule,
                         CreateTime: moment().format("YYYY-MM-DDTHH:mm:ss")
                    }
                    console.log('create clubrule', row)
                    await ClubRuleModel.create(row)
               } catch (ex) {
                    console.log(ex.message)
               }
          } else {

               await ClubRuleModel.update({
                    Rules: newRule
               }, {
                    where: {
                         ClubID: clubId,
                         KindID: kindId,
                    }
               })
          }

          res.send({
               code: 0,
               message: 'success'
          })
     },
     gameData: async function (req, res) {

          let clubId = parseInt(req.query.clubId)
          let clubRules = await ClubRuleModel.findAll({
               where: {
                    ClubID: clubId
               }
          })
          let getAndroidCount = (clubRules, kindId) => {
               let r = clubRules.find(t => t.KindID == kindId)
               if (r) return agent.parseAndroidCount(r.Rules).cbAndroidCount
               else return 0
          }
          res.send({
               code: 0,
               count: 2,
               data: [{
                    id: 60002,
                    name: '十三張',
                    cnt: getAndroidCount(clubRules, 60002),

               }, {
                    id: 60003,
                    name: '十三張加一色',
                    cnt: getAndroidCount(clubRules, 60003),
               }]
          })
     },
     setRule: function (buffer, cbAndroidCount) {
          //let buffer = Buffer.from(hexString, 'hex');

          let b0 = buffer[0];
          let b1 = buffer[1];

          if (cbAndroidCount > 0)
               b0 |= 0x02; // 允许机器人
          b1 = cbAndroidCount; // 机器人数量是

          buffer[0] = b0;
          buffer[1] = b1;

          let r = (buffer.toString('hex'))

          //console.log(agent.parseStoredValue(r));


          return buffer;

     },
     parseAndroidCount: function (buffer) {
          let NewRulesArr = [];
          for (let i = 0; i < buffer.length; i += 4) {
               NewRulesArr.push(buffer.readInt32LE(i));
          }

          // 解析各个部分
          let r1 = NewRulesArr[0];

          let bAllowAndroid = (r1 & 2) !== 0;
          let cbAndroidCount = (r1 >> 8) & 0xFF;

          return {
               bAllowAndroid,
               cbAndroidCount
          }
     },
     parseRules(buffer) {
          // 将十六进制字符串转换为 Buffer
          //let buffer = Buffer.from(hexString, 'hex');

          // 分割每个32位值
          let NewRulesArr = [];
          for (let i = 0; i < buffer.length; i += 4) {
               NewRulesArr.push(buffer.readInt32LE(i));
          }

          // 解析各个部分
          let r1 = NewRulesArr[0];
          let r2 = NewRulesArr[1];



          let r3 = NewRulesArr[2];
          let r4 = NewRulesArr[3];
          let r5 = NewRulesArr[4];
          console.log(r1, r2, r3, r4, r5)
          // 解析r1
          let isAA = (r1 & 1) !== 0;
          let bAllowAndroid = (r1 & 2) !== 0;
          let isFreeTable = (r1 & 4) !== 0;
          let cbAndroidCount = (r1 >> 8) & 0xFF;
          let isCaijin = (r1 & 0x00020000) !== 0;
          let isBidao = (r1 & 0x00040000) !== 0;

          // 解析r2
          let maxRounds = r2 >> 16;
          let daoCount = r2 & 0xFFFF;

          // 解析r3
          let comboTime = r3;

          // 解析r4
          let baseScore = r4;

          // 解析r5
          let otherRule = r5;

          // 输出结果
          return {
               isAA: isAA,
               bAllowAndroid: bAllowAndroid,
               isFreeTable: isFreeTable,
               cbAndroidCount: cbAndroidCount,
               isCaijin: isCaijin,
               isBidao: isBidao,
               maxRounds: maxRounds,
               daoCount: daoCount,
               comboTime: comboTime,
               baseScore: baseScore,
               otherRule: otherRule
          };
     },
     toLEBuffer: function (array) {
          /* const array = [  
                393472, // 0x60000 (小端)  
                524292, // 0x80004 (小端)  
                60,     // 0x3C (小端)  
                1,      // 0x1 (小端)  
                200,    // 0xC8 (小端)  
                0       // 0x0 (小端)  
              ];  */

          // 创建一个足够大的 Buffer 来存放所有的 32 位整数  
          const bufferSize = array.length * 4; // 每个整数 4 字节  
          const buffer = Buffer.alloc(bufferSize);

          // 遍历数组，将每个整数以小端字节序写入 Buffer  
          for (let i = 0; i < array.length; i++) {
               buffer.writeInt32LE(array[i], i * 4); // i * 4 是当前整数的起始偏移量（字节）  
          }

          // 将 Buffer 转换为十六进制字符串  
          const hexString = buffer.toString('hex');

          console.log(hexString); // 输出：00006000040008003c000100c8000000
     },
     game: async function (req, res) {
          let clubRules = await ClubRuleModel.findAll({
               where: {
                    ClubID: req.query.clubId
               }
          })

          console.log(clubRules)
          clubRules.forEach(item => {
               let ruleInfo = agent.parseRules(item.Rules)
               console.log(item.KindID, ruleInfo)
          })
          res.render('agent/club/game', {
               title: process.env.web_name,
               loginName: req.session.loginUser,
               clubId: req.query.clubId
          })
     },
     club: async function (req, res) {

          res.render('agent/club/club', {
               title: process.env.web_name,
               loginName: req.session.loginUser
          })
     },
     clubData: async function (req, res) {

          let result = {
               code: 200,
               message: 'success'
          }
          try {
               let where = {}
               let clubMembers = await models.clubMemberModel.findAll({
                    where: {
                         UserID: req.session.agentId,
                         ClubLevel: sequelize.literal('ClubLevel>3')
                    }
               })
               let clubIds = clubMembers.map(item => item.ClubID)

               let clubs = await models.clubListModel.findAll({
                    where: {
                         ClubID: {
                              [Op.in]: clubIds
                         }
                    }
               });
               if (clubs) {
                    for (let i in clubs) {
                         clubs[i].dataValues.CreateTime = moment(clubs[i].CreateTime).format('YYYY-MM-DD HH:mm:ss')
                    }
                    result.data = clubs;

               }

               result.code = 0;
               result.count = clubs.length;

          } catch (ex) {
               result = {
                    code: 500,
                    message: ex.message
               }
          }

          res.send(result)

     },
     clubMember: async function (req, res) {

          res.render('agent/club/member', {
               title: process.env.web_name,
               loginName: req.session.loginUser,
               clubId: req.query.clubId || 0
          })
     },
     clubMemberData: async function (req, res) {
          let page = req.query.page ? req.query.page : 1;
          let limit = req.query.limit ? parseInt(req.query.limit) : 30;
          let offset = (page - 1) * limit;
          let searchParams = req.query.searchParams ? JSON.parse(req.query.searchParams) : null;
          let beginTime = searchParams ? moment(searchParams.begintime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-01 00:00:00')
          let endTime = searchParams ? moment(searchParams.endtime).format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD 23:59:59')
          let clubId = req.query.clubId;
          let result = {
               code: 200,
               message: 'success'
          }
          try {
               let where = []
               if (searchParams && searchParams.keyword) {
                    where.push({
                         [Op.or]: [
                              { RegAccounts: { [Op.like]: '%' + searchParams.keyword + '%' } },
                              { NickName: { [Op.like]: '%' + searchParams.keyword + '%' } }
                         ]
                    })
               }
               let clubMembers = await models.clubMemberModel.findAll({
                    where: {
                         ClubID: clubId
                    }
               })
               let userIds = clubMembers.map(item => item.UserID)

               where.push({
                    UserID: {
                         [Op.in]: userIds
                    }
               })

               let cnt = await models.memberModel.count({
                    where
               })
               let rows = await models.memberModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
               })

               if (rows) {
                    for (let i in rows) {
                         rows[i].dataValues.RegisterDate = moment(rows[i].RegisterDate).format('YYYY-MM-DD HH:mm:ss')
                    }
                    result.data = rows;

               }

               result.code = 0;
               result.count = cnt;

          } catch (ex) {
               result = {
                    code: 500,
                    message: ex.message
               }
          }

          res.send(result)

     },
     user: async function (req, res) {

          let clubs = [];
          try {
               let clubMembers = await models.clubMemberModel.findAll({
                    where: {
                         UserID: req.session.agentId,
                         ClubLevel: sequelize.literal('ClubLevel>3')
                    }
               })
               let clubIds = clubMembers.map(item => item.ClubID)

               clubs = await models.clubListModel.findAll({
                    where: {
                         ClubID: {
                              [Op.in]: clubIds
                         }
                    },
                    attributes: ['ClubID', 'ClubName']
               });
          } catch (ex) {
               console.error(ex.message)
          }
          console.log(clubs)
          res.render('agent/user/list', {
               title: process.env.web_name,
               loginName: req.session.loginUser,
               clubs: JSON.stringify(clubs)
          })
     },
     userClub: async function (req, res) {

          let clubs = [];
          try {
               let clubMembers = await models.clubMemberModel.findAll({
                    where: {
                         UserID: req.session.agentId,
                         ClubLevel: sequelize.literal('ClubLevel>3')
                    }
               })
               let clubIds = clubMembers.map(item => item.ClubID)

               clubs = await models.clubListModel.findAll({
                    where: {
                         ClubID: {
                              [Op.in]: clubIds
                         }
                    },
                    attributes: ['ClubID', 'ClubName']
               });
          } catch (ex) {
               console.error(ex.message)
          }
          console.log(clubs)
          res.send(clubs)

     },
     joinClub: async function (req, res) {

          let body = req.body;
          try {
               let members = await models.memberModel.findAll({
                    where: {
                         UserId: {
                              [Op.in]: body.userIds
                         }
                    }

               })

               let robot = members.filter(t => t.IsAndroid == 1).map(item => ({
                    ClubID: body.clubId,
                    UserID: item.UserID,
                    OpID: req.session.agentId
               }))

               console.log(robot)

               robot.forEach(async (item) => {
                    const exists = await models.robotModel.findOne({
                         where: {
                              UserID: item.UserID,
                              ClubID: item.ClubID
                         }
                    })
                    if (!exists) {
                         await models.robotModel.create(item)
                    }
               })


               members.forEach(async (item) => {
                    let url = 'https://enjoy13.com'
                    //邀请
                    let res = await axios.post(url + '/appinfo/League.php?dwUserID=' + item.UserID + '&strPsw=e10adc3949ba59abbe56e057f20f883e&GetMark=4&ClubID=' + body.clubId + '&type=1&dwInviteUser=' + req.session.agentId)
                    console.log('邀请', res.data)
                    //通过
                    res = await axios.post(url + '/appinfo/League.php?dwUserID=' + req.session.agentId + '&strPsw=e10adc3949ba59abbe56e057f20f883e&ClubID=' + body.clubId + '&Level=3&GetMark=5&TagUser=' + item.UserID)
                    console.log('通过', res.data)
               });
               res.send(body)
               return;
          } catch (ex) {
               console.error(ex.message)
          }

          res.send({})

     },
     kickoutClub: async function (req, res) {

          let body = req.body;
          try {
               let members = await models.memberModel.findAll({
                    where: {
                         UserId: {
                              [Op.in]: body.userIds
                         }
                    }

               })

               let robot = members.filter(t => t.IsAndroid == 1).map(item => ({
                    ClubID: body.clubId,
                    UserID: item.UserID
               }))

               console.log(robot)

               robot.forEach(async (item) => {
                    const exists = await models.robotModel.destroy({
                         where: {
                              UserID: item.UserID,
                              ClubID: item.ClubID
                         }
                    })

               })


               members.forEach(async (item) => {
                    let url = 'https://enjoy13.com'

                    //https://enjoy13.com/appinfo/League.php?dwUserID=25&strPsw=e10adc3949ba59abbe56e057f20f883e&ClubID=579435&Level=0&GetMark=5&TagUser=65
                    //踢出
                    let res = await axios.post(url + '/appinfo/League.php?dwUserID=' + req.session.agentId + '&strPsw=e10adc3949ba59abbe56e057f20f883e&ClubID=' + body.clubId + '&Level=0&GetMark=5&TagUser=' + item.UserID);
                    console.log('踢出', res.data)

               });
               res.send(body)
               return;
          } catch (ex) {
               console.error(ex.message)
          }

          res.send({})

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
                    where.push({
                         [Op.or]: [
                              { RegAccounts: { [Op.like]: '%' + searchParams.keyword + '%' } },
                              { NickName: { [Op.like]: '%' + searchParams.keyword + '%' } }
                         ]
                    })
               }
               where.push({
                    IsAndroid: 1
               })
               /*where.push({
                    RegisterDate: {
                         [Op.between]: [beginTime, endTime]
                    }

               })*/
               let cnt = await models.memberModel.count({
                    where
               })
               let rows = await models.memberModel.findAll({
                    where,
                    limit: limit,
                    offset: offset,
               })

               if (rows) {
                    for (let i in rows) {
                         rows[i].dataValues.RegisterDate = moment(rows[i].RegisterDate).format('YYYY-MM-DD HH:mm:ss')
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
     randomBootName: async function (req, res) {
          let sqlArr = []
          let accounts = await models.memberModel.findAll({
               where: {
                    RegAccounts: {
                         [Op.like]: '%机器人%'
                    }

               }
          })
          for (let i in accounts) {
               let userId = accounts[i].UserID;
               const randomName = ChineseRandomName.generate();
               console.log(randomName);
               sqlArr.push("UPDATE [RYAccountsDB].[dbo].[AccountsInfo] SET Accounts='" + randomName + "',NickName='" + randomName + "' WHERE UserID=" + userId + ";")
          }
          let sql = sqlArr.join('\n<br>')
          res.send(sql)
     },
     randomBootScore: async function (req, res) {
          let sqlArr = []
          let sql = "SELECT a.UserID,Accounts,NickName,RegAccounts,Score FROM [RYGameScoreDB].[dbo].[GameScoreInfo] a\
          INNER JOIN [RYAccountsDB].[dbo].accountsInfo b ON a.UserID = b.UserID\
          WHERE b.RegAccounts LIKE '%机器人%';"
          let accounts = await accountDb.query(sql, { type: QueryTypes.SELECT })
          for (let i in accounts) {
               let userId = accounts[i].UserID;
               const score = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;

               sqlArr.push("UPDATE [RYGameScoreDB].[dbo].[GameScoreInfo] SET Score='" + score + "' WHERE UserID=" + userId + ";")
          }
          let sqlOut = sqlArr.join('\n<br>')
          res.send(sqlOut)
     }

}

module.exports = agent;