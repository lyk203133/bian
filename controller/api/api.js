const moment = require('moment');
const querystring = require("querystring");
const crypto = require('crypto-js')
const jwtHelper = require('../../module/jwt.js')
const { Sequelize, Op, DataTypes } = require('sequelize');
const { accountDb, treasureDb, gameScoreDb } = require('../../sequelize.js');
const models = require('../../models/account/AccountAll.js')
const gameScoreModels = require('../../models/gameScore/GameScoreAll.js')

const api = {
     //userName:user001
     //appkey-test:3D24B4F0-F913-44BC-AFB9-DACEFC88BAA7
     createUser: async function (req, res) {
          try {

               let agent = req.body.agent
               let username = req.body.username
               let nickname = req.body.nickname
               let password = req.body.password
               let ts = req.body.ts
               let clubId = req.body.clubId
               let sign = req.body.sign

               try {


                    // 验证用户名长度
                    if (username.length < 3 || username.length > 16) {
                         res.send({ code: 202, message: 'username length error' })
                         return
                    }

                    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

                    if (!usernameRegex.test(username)) {
                         res.send({ code: 203, message: 'username format error' })
                         return
                    }

                    const nicknameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

                    if (!nicknameRegex.test(nickname)) {
                         res.send({ code: 203, message: 'nickname format error' })
                         return
                    }

                    if (password.length < 6 || password.length > 20) {
                         res.send({ code: 204, message: 'password length error' })
                         return
                    }

                    let agentModel = await models.agentModel.findOne({ include: { where: { accounts: agent }, model: models.memberModel, require: true } })
                    if (agentModel == null) {
                         res.send({ code: 101, message: 'agent not exist' })
                         return
                    }

                    let appkey = agentModel.AppKey;

                    let isSign = api.checkSign({ clubId: clubId, agent: agent, username: username, password: password, nickname: nickname, ts: ts }, appkey, req.body.sign)
                    if (!isSign) {
                         res.send({ code: 900, message: 'sign error' })
                         return
                    }

                    let userModel = await models.memberModel.findOne({ where: { Accounts: username } })
                    if (userModel) {
                         res.send({ code: 200, message: 'member exists' })
                         return;
                    }



                    const transaction = await accountDb.transaction();
                    try {
                         const result = await accountDb.query('EXEC GSP_WEB_API_RegisterAccounts @strAccount = :strAccount, @strNickname = :strNickname, @cbGender = :cbGender, @strClientIP = :strClientIP, @strHeadUrl = :strHeadUrl,@strWXName = :strWXName',
                              {
                                   replacements: {
                                        strAccount: username,
                                        strNickname: username,
                                        cbGender: 0,
                                        strClientIP: '127.0.0.1',
                                        strHeadUrl: '',
                                        strWXName: username,
                                   },
                                   type: Sequelize.QueryTypes.RAW,
                                   raw: true,
                              });

                         //更新上级代理
                         await models.memberModel.update({ AgentID: agentModel.AgentID }, { where: { RegAccounts: username } })

                         //把会员加入俱乐部
                         //申请
                         //https://api.gtchess.com/appinfo/League.php?dwUserID=26&strPsw=e10adc3949ba59abbe56e057f20f883e&GetMark=4&ClubID=539874
                         /*
                         dwUserID: 26
                         strPsw: e10adc3949ba59abbe56e057f20f883e
                         GetMark: 4
                         ClubID: 539874
                         */
                         userModel = await models.memberModel.findOne({ where: { Accounts: result[0][0].Accounts } })
                         const joinResult = await treasureDb.query('EXEC GSP_WEB_JoinIn @dwUserID = :dwUserID, @strPassword = :strPassword, @ClubID = :ClubID',
                              {
                                   replacements: {
                                        dwUserID: userModel.UserID,
                                        strPassword: userModel.LogonPass,
                                        ClubID: clubId,
                                   },
                                   type: Sequelize.QueryTypes.RAW,
                                   raw: true,
                              });



                         //接受
                         //https://api.gtchess.com/appinfo/League.php?dwUserID=11&strPsw=e10adc3949ba59abbe56e057f20f883e&ClubID=539874&Level=3&GetMark=5&TagUser=26
                         /*
                         dwUserID: 11
                         strPsw: e10adc3949ba59abbe56e057f20f883e
                         ClubID: 539874
                         Level: 3
                         GetMark: 5
                         TagUser: 26
                         */
                         const acceptResult = await treasureDb.query('EXEC GSP_WEB_SetMemLevelByID @dwUserID = :dwUserID, @strPassword = :strPassword, @ClubID = :ClubID,@Level=:Level,@TagUserID=:TagUserID',
                              {
                                   replacements: {
                                        dwUserID: agentModel.UserID,
                                        strPassword: agentModel.Member.LogonPass,
                                        ClubID: clubId,
                                        Level: 3,
                                        TagUserID: userModel.UserID,
                                   },
                                   type: Sequelize.QueryTypes.RAW,
                                   raw: true,
                              });

                         console.log(result);
                         // 提交事务
                         await transaction.commit();
                         console.log('Transaction committed successfully');
                    } catch (error) {
                         // 回滚事务
                         await transaction.rollback();
                         console.error('Transaction rolled back:', error);
                         res.send({ code: 500, msg: "system error" });
                         return;

                    }


                    res.send({ code: 0, msg: "success" });

               }
               catch (ex) {
                    res.send({ code: 500, msg: "创建会员出错:" + ex.message });
               }



          } catch (ex) {

               res.send({ code: 500, message: ex.message, debug: ex.sql })
          }
     },
     login: async function (req, res) {
          try {

               let agent = req.body.agent
               let username = req.body.username
               let ts = req.body.ts
               let clubId = req.body.clubId
               let gameId = req.body.gameId
               let sign = req.body.sign
               let backUrl = req.body.backUrl
               backUrl = querystring.unescape(backUrl);

               let agentModel = await models.agentModel.findOne({ include: { where: { accounts: agent }, model: models.memberModel, require: true } })
               if (agentModel == null) {
                    res.send({ code: 101, message: 'agent not exist' })
                    return
               }
               let appkey = agentModel.AppKey;

               let isSign = api.checkSign({ clubId: clubId, gameId: gameId, agent: agent, username: username, ts: ts, backUrl: backUrl }, appkey, req.body.sign)
               if (!isSign) {
                    res.send({ code: 900, message: 'sign error' })
                    return
               }

               let memberModel = await models.memberModel.findOne({ where: { accounts: username } })
               if (memberModel == null) {
                    res.send({ code: 102, message: 'user not exists' })
                    return
               }
               let token = jwtHelper.generateToken({
                    agent: agent,
                    clubId: clubId,
                    gameId: gameId,
                    username: username,
                    password: memberModel.LogonPass,
                    nickname: username,
                    userID: memberModel.UserID,
                    backUrl: backUrl
               })
               res.send({
                    code: 0, message: 'success', data: {
                         gameUrl: process.env.game_url + '?token=' + querystring.escape(token)
                    }
               })

          } catch (ex) {
               res.send({ code: 500, message: ex.message })
          }
     },
     transferIn: async function (req, res) {
          api.transaction(req, res, 1)
     },
     transferOut: async function (req, res) {
          api.transaction(req, res, 2)
     },
     transaction: async function (req, res, type) {
          try {

               let agent = req.body.agent
               let username = req.body.username
               let ts = req.body.ts
               let score = req.body.score
               //let type = req.body.type
               let remark = req.body.remark ?? ''
               let clubId = req.body.clubId
               let sign = req.body.sign

               score = parseInt(req.body.score)
               if (score <= 0) {
                    res.send({ code: 301, message: 'score can not be less then zero' })
                    return
               }

               let agentModel = await models.agentModel.findOne({ include: { where: { accounts: agent }, model: models.memberModel, require: true } })
               if (agentModel == null) {
                    res.send({ code: 101, message: 'agent not exist' })
                    return
               }
               let appkey = agentModel.AppKey;

               let isSign = api.checkSign({ agent: agent, username: username, ts: ts, clubId: clubId, score: score }, appkey, req.body.sign)
               if (!isSign) {
                    res.send({ code: 900, message: 'sign error' })
                    return
               }

               let userModel = await models.memberModel.findOne({
                    where: { accounts: username },
                    include:
                    {
                         model: models.clubMemberModel,
                         where: { ClubID: clubId },
                         required: true
                    }

               })

               if (!userModel || !userModel.ClubMember) {
                    console.log('user not exists')
                    res.send({ code: 102, message: 'user not exists' })
                    return;
               }

               let gameScoreInfo = await gameScoreModels.gameScoreInfoModel.findOne({
                    where: {
                         UserID: userModel.UserID
                    }
               })

               let balance = 0;
               if (gameScoreInfo)
                    balance = gameScoreInfo.Score;

               if (type == 2) {
                    if (score > balance) {
                         //await transaction.rollback();
                         console.log('Not enough points');
                         res.send({ code: 206, message: 'Not enough points' })
                         return;
                    }
                    score *= -1
                    //检查余额
               }



               let totalScore = balance;

               try {
                    let UserID = userModel.UserID
                    const result = await treasureDb.query('EXEC [GSP_ClubRecordScore] @ClubID = :ClubID,@dwUserID = :dwUserID, @lScore = :lScore,@dwInoutIndex=:dwInoutIndex,@ScoreType=:ScoreType,@remark=:remark',
                         {
                              replacements: {
                                   ClubID: clubId,
                                   dwUserID: userModel.UserID,
                                   lScore: score,
                                   dwInoutIndex: 0,
                                   ScoreType: 1,
                                   remark: remark
                              },
                              type: Sequelize.QueryTypes.RAW,
                              raw: true,
                         });
                    console.log(UserID, result)
                    let clubScoreRow = await models.clubMemberModel.findOne({ where: { UserID: userModel.UserID, ClubID: clubId } })
                    if (clubScoreRow) totalScore = clubScoreRow.Score;
                    //await transaction.commit();
               } catch (ex) {
                    // 回滚事务
                    console.error('Transaction error:', ex);
                    res.send({ code: 500, message: ex.message })
                    return;
               }

               res.send({
                    code: 0,
                    message: 'success',
                    data: {
                         score: totalScore
                    }
               });

          } catch (ex) {
               res.send({ code: 500, message: ex.message })
          }
     },
     transactionbak: async function (req, res) {
          try {
               let agent = req.body.agent
               let username = req.body.username
               let ts = req.body.ts
               let amount = req.body.amount
               let type = req.body.type

               let clubId = req.body.clubId
               let sign = req.body.sign

               let agentModel = await models.agentModel.findOne({ include: { where: { accounts: agent }, model: models.memberModel, require: true } })
               if (agentModel == null) {
                    res.send({ code: 101, message: 'agent not exist' })
                    return
               }
               let appkey = agentModel.AppKey;

               let isSign = api.checkSign({ agent: agent, username: username, ts: ts, clubId: clubId, type: type }, appkey, req.body.sign)
               if (!isSign) {
                    res.send({ code: 900, message: 'sign error' })
                    return
               }

               let userModel = await models.memberModel.findOne({ where: { accounts: username } })
               if (userModel == null) {
                    res.send({ code: 102, message: 'member not exists' })
                    return
               }


               const transaction = await accountDb.transaction();
               let totalScore = 0
               try {
                    let UserID = userModel.UserID
                    // 获取会员记录并使用行级锁
                    const query = `SELECT * FROM ClubMember WITH (UPDLOCK) WHERE UserID = :UserID and ClubID=:ClubID`;
                    const member = await accountDb.query(query, {
                         replacements: { UserID: UserID, ClubID: clubId },
                         type: Sequelize.QueryTypes.SELECT,
                         transaction,
                    });

                    if (type == 'withdraw') {
                         if (amount > member[0].Score) {
                              await transaction.rollback();
                              res.send({ code: 500, message: '分数不足' })
                              return;
                         }
                         amount *= -1
                         //检查余额
                    }

                    // 更新会员余额
                    totalScore = parseFloat(member[0].Score) + amount;


                    await accountDb.query('UPDATE ClubMember SET Score = :Score WHERE UserID = :UserID AND ClubID = :ClubID', {
                         replacements: { Score: totalScore, UserID: UserID, ClubID: clubId },
                         type: Sequelize.QueryTypes.UPDATE,
                         transaction,
                    });


                    // 提交事务
                    await transaction.commit();

                    console.log('Member balance updated successfully');

               } catch (ex) {
                    // 回滚事务
                    await transaction.rollback();

                    console.error('Transaction rolled back:', ex);
                    res.send({ code: 500, message: ex.message })
                    return;
               }

               res.send({
                    code: 0,
                    message: 'success',
                    data: {
                         accounts: userModel.Accounts,
                         medal: userModel.UserMedal,
                         experience: userModel.Experience,
                         score: totalScore
                    }
               });

          } catch (ex) {

               res.send({ code: 500, message: ex.message })
          }
     },
     getBalance: async function (req, res) {
          try {

               let agent = req.body.agent
               let username = req.body.username
               let ts = req.body.ts
               let clubId = req.body.clubId
               let sign = req.body.sign

               let agentModel = await models.agentModel.findOne({ include: { where: { accounts: agent }, model: models.memberModel, require: true } })
               if (agentModel == null) {
                    res.send({ code: 101, message: 'agent not exist' })
                    return
               }
               let appkey = agentModel.AppKey;

               let isSign = api.checkSign({ agent: agent, username: username, ts: ts, clubId: clubId }, appkey, req.body.sign)
               if (!isSign) {
                    res.send({ code: 900, message: 'sign error' })
                    return
               }

               let userModel = await models.memberModel.findOne({
                    where: { accounts: username },
                    include:
                    {
                         model: models.clubMemberModel,
                         where: { ClubID: clubId }
                    }

               })

               if (userModel == null) {
                    res.send({ code: 102, message: 'member not exists' })
                    return
               }


               if (!userModel.ClubMember) {
                    res.send({ code: 1003, message: 'club member not exists', user: userModel })
                    return
               }

               let gameScoreInfo = await gameScoreModels.gameScoreInfoModel.findOne({
                    where: {
                         UserID: userModel.UserID
                    }
               })

               let balance = 0;
               if (gameScoreInfo) balance = gameScoreInfo.Score;

               res.send({
                    code: 0,
                    message: 'success',
                    data: {
                         score: balance
                    }
               });
          } catch (ex) {

               res.send({ code: 500, message: ex.message, debug: ex.sql })
          }
     },
     getGameLog: async function (req, res) {
          try {

               let agent = req.body.agent

               let ts = req.body.ts
               let clubId = req.body.clubId
               let page = req.body.page ?? 1
               let limit = req.body.limit ?? 50
               let offset = (page - 1) * limit
               let sign = req.body.sign
               let beginTime = req.body.beginTime || moment().format("YYYY-MM-DD 00:00:00");
               let endTime = req.body.endTime || moment().format("YYYY-MM-DD 23:59:59");

               let agentModel = await models.agentModel.findOne({ include: { where: { accounts: agent }, model: models.memberModel, require: true } })
               if (agentModel == null) {
                    res.send({ code: 101, message: 'agent not exist' })
                    return
               }
               let appkey = agentModel.AppKey;

               let isSign = api.checkSign({ agent: agent, ts: ts, clubId: clubId, page: page, limit: limit }, appkey, req.body.sign)
               if (!isSign) {
                    res.send({ code: 900, message: 'sign error' })
                    return
               }





               let scoreLogModel = await models.scoreLogModel.findAndCountAll({
                    where: {
                         ScoreType: 0,
                         BetTime: {
                              [Op.gte]: beginTime,
                              [Op.lte]: endTime
                         }
                    },
                    offset: offset,
                    limit: limit,
                    order: [['LogID', 'DESC']]
               })
               //Conversion failed when converting date and/or time from character string.
               //上面语法会报这个错误，如何修正


               res.send({
                    code: 0,
                    message: 'success',
                    data: scoreLogModel

               });
          } catch (ex) {

               res.send({ code: 500, message: ex.message })
          }
     },
     getGames: async function (req, res) {
          const games = [
               {
                    GameID: 1320,
                    GameName: '德州撲克'
               }, {
                    GameID: 10012,
                    GameName: '牛牛'
               }, {
                    GameID: 52160,
                    GameName: '台灣麻將'
               }, {
                    GameID: 52162,
                    GameName: '二人麻將'
               }, {
                    GameID: 60001,
                    GameName: '大老二'
               }, {
                    GameID: 60002,
                    GameName: '十三張'
               }, {
                    GameID: 60003,
                    GameName: '十三張加一色'
               }, {
                    GameID: 60005,
                    GameName: '四隻刀'
               }
          ]

          /*let sql = '';
          games.forEach(game=>{
               sql += "INSERT INTO `qd_game` (`id`, `game_store_id`, `store_game_id`, `name_zh`, `name_cn`, `name_en`, `name_viet`, `name_thai`, `name_ja`, `name_hindi`, `name_pill`, `pic_url`, `pic_url_zh`, `pic_url_en`, `pic_url_thai`, `status`, `landscape`, `vip`, `hot`, `recommend`, `is_new`, `sort`, `created_at`, `updated_at`, `deleted_at`) VALUES (NULL, '26', '"+game.GameID+"', '"+game.GameName+"', '"+game.GameName+"', '"+game.GameName+"', '"+game.GameName+"', '"+game.GameName+"', '"+game.GameName+"', '"+game.GameName+"', '"+game.GameName+"', '/static/games/t9/"+game.GameID+".png', '/static/games/t9/"+game.GameID+".png', '/static/games/t9/"+game.GameID+".png', '/static/games/t9/"+game.GameID+".png', '1', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL);"
          })*/

          res.send(games)

     },
     getToken: async function (req, res) {
          try {
               console.log(req.body);
               let username = req.body.username
               let ts = req.body.ts;
               let row = await db2.execute('select * from fbd_users where username=?', [username]);
               if (row[0].length == 0) {
                    res.send({ code: 101, message: 'agent not exist' })
                    return
               }
               let row_data = row[0][0];
               let appkey = row_data.appkey
               let isSign = api.checkSign({ username: username, ts: ts }, appkey, req.body.sign)

               if (isSign) {
                    let payload = { id: row_data.id, username: row_data.username, pid: row_data.pid, parents: row_data.parents }
                    let jwt_str = null;
                    if (process.env.debug == 'true')
                         jwt_str = jwtHelper.generateToken(payload, 60 * 20 * 1000000);
                    else
                         jwt_str = jwtHelper.generateToken(payload, 60 * 20);
                    res.send({ code: 0, message: 'success', data: jwt_str })
               }
               else
                    res.send({ code: 900, message: 'sign error' })
          } catch (ex) {
               console.log(ex.message)
               res.send({ code: 500, message: ex.message, debug: ex.sql })
          }
     },
     ksort: function (obj) {
          const sortedKeys = Object.keys(obj).sort();
          const sortedObj = {};
          sortedKeys.forEach((key) => {
               sortedObj[key] = obj[key];
          });
          return sortedObj;
     },
     checkSign: function (params, appkey, sign) {
          let newparams = api.ksort(params)
          let str = querystring.stringify(newparams)
          str = querystring.unescape(str);
          str = str + '&appkey=' + appkey
          console.log(str);
          let enstr = crypto.MD5(str).toString()
          console.log(enstr);
          return enstr == sign
     },

}

module.exports = api;