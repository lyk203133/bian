
const moment = require('moment');
const ChineseRandomName = require('chinese-random-name');
const { Sequelize, Op, DataTypes, QueryTypes, Model, fn, col } = require('sequelize');
const sequelize = require('../../sequelize.js');
const userModel = require('../../models/user.js');
const levelModel = require('../../models/level.js');
const models = require('../../models/all.js');
const session = require('express-session');
const crypto = require('crypto-js');
const { default: axios } = require('axios');
const userService = require('../../service/userService.js')
const baseService = require('../../service/baseService.js')
const jwt = require('../../module/jwt.js');
const marketService = require('../../service/marketService.js');
const ticketService = require('../../service/ticketService.js');
const web = {
    register: async function (req, res) {
        try {

            let username = req.body.username;
            let password = req.body.password;
            let password2 = req.body.password2;
            let code = req.body.code;
            const regex = /^[a-zA-Z_0-9]{6,20}$/;
            if (!regex.test(username)) {
                res.send({
                    code: 403,
                    message: '帳號為6﹣20英文、數字、下劃線組成' + username
                })
                return;
            }
            if (password != password2) {
                res.send({
                    code: 403,
                    message: '兩次輸入密碼不一致'
                })
                return;
            }
            if (code != req.session.captcha) {
                res.send({
                    code: 403,
                    message: '驗證碼不正確' + code + ',' + req.session.captcha
                })
                return;
            }
            let user = await userModel.findOne({
                where: {
                    username
                }
            });
            if (user) {
                res.send({
                    code: 403,
                    message: '會員已存在'
                })
                return;
            }
            let salt = moment().unix();

            password = crypto.MD5(password + salt).toString();
            //console.log(password, salt)

            user = await models.userModel.create({
                username,
                password,
                salt,
                status: 1,
                balance: 0,
                lv: 1,
                created: moment().format("YYYY-MM-DD HH:mm:ss"),
                updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                email: '',
            })


            res.send({
                code: 200,
                message: 'success'
            })
        } catch (ex) {
            console.error('user login error', ex)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    kuang: async function (req, res) {

        res.render('web/kuang')
    },

    task: async function (req, res) {

        res.render('web/task')
    },
    setting: async function (req, res) {
        try {
            let setting = await models.settingModel.findOne();
            res.send({
                code: 200,
                data: setting,
                message: 'sccess'
            })
        } catch (ex) {
            res.send({
                code: 500,
                message: ex.message
            })
        }
    },
    user: async function (req, res) {
        if (!req.session.userId) {
            res.redirect('/')
            return;
        }
        let setting = null;
        let articles = [];
        let privateInfo = [];
        let userRow;
        let verifyStatusInfo = {
            verifyStatusName: '未驗證',
            verifyStatusColor: 'white'
        }
        let verifyRemark = ''

        try {
            setting = await models.settingModel.findOne();
            articles = await models.articleModel.findAll({
                where: {
                    status: 1
                }
            });
            for (let i in articles) {
                let row = articles[i];
                row.dataValues.content = baseService.formatHtmlContent(row.content);
            }
            userRow = await models.userModel.findOne({
                where: {
                    id: req.session.userId
                }
            });


            let cusTaskMode = await models.cusTaskMode.findOne({
                where: {
                    userName: req.session.username
                },
                order: [['id', 'desc']]
            })
            if (cusTaskMode) verifyRemark = cusTaskMode.comment
            console.log('verify', req.session.userId, userRow.verifyStatus, JSON.stringify(userRow))

            verifyStatusInfo = userService.getVerifyStatusInfo(userRow.verifyStatus, 'white')
        } catch (ex) {
            console.error(ex.message)
        }
        res.render('web/user', {
            addr: req.session.username || '',
            setting,
            responsibility: articles.filter(t => t.type == 1),
            privateInfo: articles.filter(t => t.type == 2),
            user: userRow,
            verifyStatusName: verifyStatusInfo.verifyStatusName,
            verifyStatusColor: verifyStatusInfo.verifyStatusColor,
            verifyRemark
        })
    },

    login: async function (req, res) {
        try {

            let username = req.body.username;
            let password = req.body.password;
            let user = await userModel.findOne({
                where: {
                    username
                }
            });
            if (user) {
                let salt = user.salt;
                let chkpassword = crypto.MD5(password + user.salt).toString();
                if (chkpassword == user.password) {

                    req.session.userId = user.id;
                } else {
                    res.send({
                        code: 403,
                        message: '請檢查帳密'
                    })
                    return;
                }
            } else {

                res.send({
                    code: 403,
                    message: '請檢查帳密'
                })
                return;
            }

            //console.log(req.session.lineId, req.session.userId)
            res.send({
                code: 200,
                message: 'success'
            })
        } catch (ex) {
            console.error('user login error', ex)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    logout: function (req, res) {
        req.session.destroy();
        res.redirect('/')
    },
    changepwd: async function (req, res) {
        try {
            if (!req.session.userId) {
                res.send({
                    code: 401,
                    message: '請登入'
                })
                return;
            }
            let password = req.body.password;
            let password1 = req.body.password1;
            let password2 = req.body.password2;
            if (password1 != password2) {
                res.send({
                    code: 500,
                    message: '兩次輸入密碼不一致'
                })
                return;
            }

            if (!password1 || password1.length < 6) {
                res.send({
                    code: 500,
                    message: '密碼長度為6個字符'
                })
                return;
            }
            let user = await userModel.findOne({
                where: {
                    id: req.session.userId
                }
            });
            if (!user) {
                res.send({
                    code: 500,
                    message: '會員錯誤'
                })
                return;
            }

            let chkpassword = crypto.MD5(password + user.salt).toString();
            if (chkpassword != user.password) {
                res.send({
                    code: 500,
                    message: '會員密碼錯誤'
                })
                return;
            }

            let salt = new Date().getTime();
            let newPwd = crypto.MD5(password1 + salt).toString();
            await models.userModel.update({
                password: newPwd,
                salt
            }, {
                where: {
                    id: req.session.userId
                }
            })



            res.send({
                code: 200,
                message: '修改成功'
            })
        } catch (ex) {
            console.error('change password error', ex)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    walletlogin: async function (req, res) {
        try {
            let addr = req.body.addr;
            if (!addr) {
                console.error('walletlogin error,addr undefined')
                res.send({
                    code: 500,
                    message: 'error'
                })
                return;
            }
            let token = '';
            let user = await models.userModel.findOne({
                where: {
                    username: addr
                }
            });
            if (user) {
                if (user.status != 1) {
                    res.send({
                        code: 403,
                        message: '帳號被鎖定'
                    })
                    return;
                }
                req.session.userId = user.id;
                req.session.username = user.username;

                token = jwt.generateToken({
                    id: user.id,
                    username: user.username
                })
                await models.userModel.update({
                    ip: baseService.getIp(req)
                }, {
                    where: {
                        id: user.id
                    }
                })
                //console.log(token)

            } else {
                let salt = moment().unix();
                user = await models.userModel.create({
                    username: addr,
                    password: '',
                    salt,
                    status: 1,
                    balance: 0,
                    lv: 1,
                    created: moment().format("YYYY-MM-DD HH:mm:ss"),
                    updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                    email: '',
                    mobile: '',
                    card: '',
                    truename: '',
                    ip: baseService.getIp(req)

                })
                req.session.userId = user.id;
                req.session.username = addr;
                token = jwt.generateToken({
                    id: user.id,
                    username: user.username
                })
                //console.log(token)

            }

            await models.userLoginModel.create({
                userId: user.id,
                ip: baseService.getIp(req),
                userAgent: req.headers['user-agent'],
                loginTime: moment().format("YYYY-MM-DD HH:mm:ss")
            })
            //console.log(req.session.username, req.session.userId)
            res.send({
                code: 200,
                data: token,
                message: 'success'
            })
        } catch (ex) {
            console.error('wallet login error', ex)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },

    index: async function (req, res) {
        res.redirect('/public/h5');
        return;
        let user = await userModel.findOne({
            where: {
                id: req.session.userId || ''
            }
        });
        let balance = 0;
        if (user) balance = user.balance

        balance = parseFloat(balance).toFixed(4)
        res.render('web/index', {
            balance
        })
    },
    profile: async function (req, res) {
        console.log('global.cache', global.cache['setting'])
        if (!global.cache.setting || Object.keys(global.cache.setting).length === 0) {
            global.cache.setting = await models.settingModel.findOne();
        }
        console.log('global.cache', global.cache.setting)
        console.log('profile session:', req.session.userId, 'token:', req.query.token)

        console.log('profile check', req.session.userId)
        let userId = 0;

        if (req.query.token) {
            let user = jwt.verifyToken(req.query.token);
            if (user) {
                userId = user.id
            }
        }



        if (userId == 0) {
            res.send({
                code: 401,
                message: '請登入'
            })
            return;
        }
        try {

            let user = await userModel.findOne({
                where: {
                    id: userId
                },
                logging: false
            });


            let setting = global.cache.setting || await models.settingModel.findOne();
            let authorizedAddress = setting.addr_authorized;
            res.send({
                code: 200,
                message: 'success',
                data: user,
                token: jwt.generateToken({
                    id: user.id,
                    username: user.username,

                }),
                balance: user.balance,
                authorizedAddress,
                buyAmounts: setting.amounts
            })
        } catch (ex) {
            console.error('profile error', ex)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    buy: async function (req, res) {
        let userId = 0;
        if (!req.session.userId) {
            if (req.body.token) {
                let user = jwt.verifyToken(req.body.token);
                if (user) {
                    userId = user.id
                }
            }

        } else {
            userId = req.session.userId
        }

        if (userId == 0) {
            res.send({
                code: 401,
                message: '請登入'
            })
            return;
        }

        

        

        let quantity = parseInt(req.body.quantity);
        if (!quantity || quantity <= 0) {

            res.send({
                code: 500,
                message: '請輸入金額'
            })
            return;
        }

        const second = 60;
        let wholeMinute = baseService.getWholeMinute(second);
        console.log('buy time check',wholeMinute)
/*
        let row = await models.marketModel.findOne({
            where: {
                symbol: req.body.pair.toUpperCase(),
                openTime:wholeMinute.oneMinuteAgo
            },
        })
        if (!row) {
            res.send({
                code: 500,
                message: '数据准备中'
            })
            return;
        }*/


        const thisBuy = await models.ticketModel.findOne({
            attributes: [
                [fn('SUM', col('quantity')), 'totalQuantity'],
                [fn('COUNT', col('id')), 'count']
            ],
            where: {
                buyTime: wholeMinute.timestampAgo,
                userId: userId
            },
            raw: true
        })
        let buyTotal = quantity;
        if (thisBuy.totalQuantity) buyTotal += parseInt(thisBuy.totalQuantity);
        const setting = await models.settingModel.findOne();
        if (setting.bet_limit > 0 && buyTotal > setting.bet_limit) {
            console.error('超出限額', userId, thisBuy.totalQuantity, setting.bet_limit)
            res.send({
                code: 403,
                message: '超出限額'
            })
            return;
        }
        const transaction = await sequelize.transaction();
        try {

            let user = await userModel.findOne({
                where: {
                    id: userId
                },
                lock: true,
                transaction: transaction,
            });

            if (!user) {
                await transaction.rollback();
                let message = ({ code: 404, message: '會員不存在' })
                res.send(message)
            }

            if (user.status != 1) {
                await transaction.rollback();
                let message = ({ code: 500, message: '會員狀態有誤' })
                res.send(message)
            }


            if (user.balance < quantity) {
                await transaction.rollback();
                res.send({
                    code: 403,
                    message: '餘額不足'
                })
                return;
            }

            let beforeCoin = user.balance;
            user.balance = user.balance - quantity;
            await user.save({ transaction: transaction });

            let market = await models.marketModel.findOne({
                where: {
                    symbol: req.body.pair.toUpperCase(),
                    openTime:wholeMinute.timestampAgo
                }
            })
            if (!market) {
                await transaction.rollback();
                res.send({
                    code: 500,
                    message: '不支持下單，請聯繫管理員'
                })
                return;
            }


            const ticketRow = await models.ticketModel.create({
                no: moment().format("YYMMDDHHmmss") + userId,
                userId: userId,
                pair: req.body.pair,
                betType: parseInt(req.body.buyType),
                price: parseFloat(market.lastPrice),
                buyTime: wholeMinute.timestampAgo,
                resultTime: wholeMinute.timestampFuture,
                status: 0,
                resultPrice: 0,
                fee: 0,
                result: 0,
                buySecond: second,
                quantity: quantity,
                remark: '',
                created: moment().format('YYYY-MM-DD HH:mm:ss'),
                updated: moment().format('YYYY-MM-DD HH:mm:ss'),
            }, {
                transaction: transaction
            })

            await models.balanceLogModel.create({
                userId: userId,

                coin: quantity,
                beforeCoin,
                afterCoin: user.balance,
                type: 1,
                remark: '下單扣款(' + ticketRow.id + ')',
                created: moment().format("YYYY-MM-DD HH:mm:ss"),
                updated: moment().format("YYYY-MM-DD HH:mm:ss"),

            }, {
                transaction: transaction
            })

            await transaction.commit(); 

            res.send({
                code: 200,
                message: '購買成功',
                data: user
            })
        } catch (ex) {
            await transaction.rollback();
            console.error('buy error', ex)
            res.send({
                code: 500,
                message: '購買失敗，請系管理員'
            })
        }
    },
    buyHistory: async function (req, res) {
        try {
            let userId = req.session.userId;
            if (!userId) {
                let user = jwt.verifyToken(req.query.token);
                if (user) userId = user.id
            }
            let limit = 20;
            if (req.query.limit) limit = parseInt(req.query.limit);
            let page = 1;
            if (req.query.page) page = parseInt(req.query.page);
            let offset = (page - 1) * limit

            let total = await models.ticketModel.count({
                where: {
                    userId
                }
            })

            let rows = await models.ticketModel.findAll({
                where: {
                    userId: userId,

                },
                offset,
                limit: limit,
                order: [['id', 'desc']]
            })

            for (let i in rows) {
                rows[i].dataValues.created = moment(rows[i].created).format("HH:mm:ss")
            }

            res.send({
                code: 200,
                data: rows,
                count: total
            })
        } catch (error) {
            console.error(error.message)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    cancelTicket: async function (req, res) {
        try {
            let id = parseInt(req.query.id)
            let userId = req.session.userId;
            if (!userId) {
                let user = jwt.verifyToken(req.query.token);
                if (user) userId = user.id
            }
            let ticket = await models.ticketModel.findOne({
                where: {
                    id,
                    userId
                }
            })
            if (ticket && ticket.status == 0) {
                await models.ticketModel.update({
                    status: -1
                }, {
                    where: {
                        id
                    }
                })
                res.send({
                    code: 200,
                    message: 'success'
                })
            } else {
                res.send({
                    code: 500,
                    message: '訂單狀態錯誤'
                })
            }
        } catch (error) {
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    walletTransfer: async function () {

        console.log('walletTransfer');
        // BEP-20 合约地址和 ABI 示例
        const BEP20_ADDRESS = '0x55d398326f99059ff775485246999027b3197955'; // 例如 USDT (BEP-20)
        const BEP20_ABI = [
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];

        async function transferTokens() {
            // 调用转账函数
            const fromAddress = '0x73E087b0CBB11d8fdDa3710926F1B288609B2172';
            const toAddress = '0x73E087b0CBB11d8fdDa3710926F1B288609B2172';
            const amount = '0.01'; // 转账金额
            const privateKey = '9ece456f6be8c0695feb03b45883b9d076c98821cd393a11d61d5369743dc3b4'; // 钱包私钥

            const Web3 = require('web3');
            const web3 = new Web3('https://bsc-dataseed.binance.org/'); // Binance Smart Chain 节点

            const contract = new web3.eth.Contract(BEP20_ABI, BEP20_ADDRESS);

            // 创建并签名交易
            const transferTx = {
                from: fromAddress,
                to: BEP20_ADDRESS,
                gas: 200000,
                data: contract.methods.transferFrom(fromAddress, toAddress, web3.utils.toWei(amount, 'ether')).encodeABI()
            };

            // 使用私钥签名交易
            const signedTx = await web3.eth.accounts.signTransaction(transferTx, privateKey);

            // 发送交易
            try {
                const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
                console.log('Transaction receipt:', receipt);
            } catch (error) {
                console.error('Transaction error:', error);
            }
        }
        await transferTokens();
        res.send('ok');

    },
    
    calculateTicket: async function (req, res) {
        try {
            
            await ticketService.calculateTicket()

            res.send({
                code: 200,
                message: 'success'
            })
        } catch (error) {
            console.error('calculateTicket error', error.message)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    calculateTicket2: async function (req, res) {
        try {
            let rows = await models.ticketModel.findAll({
                where: {
                    status: 0,

                }
            })

            //获取价格
            let url = 'https://api.binance.com/api/v3/ticker/price?symbols=[%22BTCUSDT%22,%22BNBUSDT%22,%22ETHUSDT%22,%22USDCUSDT%22]'
            let reqData = await axios.get(url)

            let result = reqData.data;
            //console.log(result)
            for (let i in rows) {

                let row = rows[i];
                let pairBianceData = result.find(t => t.symbol == row.pair.toUpperCase())
                if (pairBianceData) {
                    let resultPrice = parseFloat(pairBianceData.price);
                    let buyPrice = parseFloat(row.price);
                    let result = 0;
                    if (row.betType == 1) {
                        //涨
                        if (resultPrice > buyPrice) result = row.quantity;
                    } else if (row.betType == 2) {
                        //涨
                        if (resultPrice < buyPrice) result = row.quantity;
                    }

                    console.log('cal item ticket', resultPrice, buyPrice, result, row.betType)

                    await models.ticketModel.update({
                        result,
                        status: 1,
                        updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                    }, {
                        where: {
                            id: row.id
                        }
                    })
                }



                //console.log('success')

            }
            res.send({
                code: 200,
                message: 'success'
            })
        } catch (error) {
            console.error('calculateTicket error', error.message)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    transfer: async function (req, res) {
        try {

            let userId = 0;
            if (!req.session.userId) {
                if (req.body.token) {
                    let user = jwt.verifyToken(req.body.token);
                    if (user) {
                        userId = user.id
                    }
                }

            } else {
                userId = req.session.userId
            }

            if (userId == 0) {
                res.send({
                    code: 401,
                    message: '請登入'
                })
                return;
            }


            let amount = parseFloat(req.body.amount)
            if (!req.body.amount || amount < 0) {
                res.send({
                    code: 500,
                    message: '请填正确金额'
                })
                return;
            }
            let user = await models.userModel.findOne({
                where: {
                    id: userId
                }
            })
            if (!user) {
                res.send({
                    code: 404,
                    message: '會員不存在'
                })
                return;
            }

            let setting = await models.settingModel.findOne();

            let type = parseInt(req.body.type)
            let fee = type == 2 ? setting.withdrawFee : 0
            if (type == 2) {
                if (amount > user.balance) {
                    res.send({
                        code: 500,
                        message: '餘額不足'
                    })
                    return;
                }
                if (amount < fee) {
                    res.send({
                        code: 500,
                        message: '金額不能低於' + fee + 'U'
                    })
                    return;
                }
            }
            await models.transferModel.create({
                type: req.body.type,
                userId: userId,
                amount: amount - fee,
                fee,
                status: 0,
                remark: '',
                created: moment().format("YYYY-MM-DD HH:mm:ss"),
                updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                receipt: req.body.receipt || '',
                transactionHash: req.body.transactionHash || '',
                fromAddr: req.body.fromAddress || '',
                toAddr: req.body.toAddress || '',
            })

            res.send({
                code: 200,
                message: '轉出申請成功，請耐心等待審核！'
            })
        } catch (error) {
            console.error('transfer error', error)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    withdraw: async function (req, res) {
        let userId = 0;
        if (!req.session.userId) {
            if (req.body.token) {
                let user = jwt.verifyToken(req.body.token);
                if (user) {
                    userId = user.id
                }
            }

        } else {
            userId = req.session.userId
        }

        if (userId == 0) {
            res.send({
                code: 401,
                message: '請登入'
            })
            return;
        }

        const transaction = await sequelize.transaction();
        try {
            if (!userId) {
                await transaction.rollback();
                res.send({
                    code: 401,
                    message: '請登入'
                })
                return;
            }

            let amount = parseFloat(req.body.amount)
            if (!req.body.amount || amount < 0) {
                await transaction.rollback();
                res.send({
                    code: 500,
                    message: '请填正确金额'
                })
                return;
            }
            let user = await models.userModel.findOne({
                where: {
                    id: userId
                },
                lock: true,
                transaction: transaction,
            })
            if (!user) {
                await transaction.rollback();
                res.send({
                    code: 404,
                    message: '會員不存在'
                })
                return;
            }

            if (user.verifyStatus != 2) {
                await transaction.rollback();
                res.send({
                    code: 500,
                    message: '請先完成實名認證再出款'
                })
                return;
            }

            let setting = await models.settingModel.findOne();

            let type = parseInt(req.body.type)
            let fee = type == 2 ? setting.withdrawFee : 0
            if (type == 2) {
                if (amount > user.balance) {
                    await transaction.rollback();
                    res.send({
                        code: 500,
                        message: '餘額不足'
                    })
                    return;
                }
                if (amount < fee) {
                    await transaction.rollback();
                    res.send({
                        code: 500,
                        message: '金額不能低於' + fee + 'U'
                    })
                    return;
                }

            }



            let balance = parseFloat(user.balance);

            user.balance = balance - amount;
            //console.log('user new balance', user.balance, amount)
            await user.save({ transaction: transaction });


            let transferRow = await models.transferModel.create({
                type: req.body.type,
                userId: userId,
                amount: amount - fee,
                fee,
                status: 0,
                remark: '',
                created: moment().format("YYYY-MM-DD HH:mm:ss"),
                updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                receipt: req.body.receipt || '',
                transactionHash: req.body.transactionHash || '',
                fromAddr: req.body.fromAddress || '',
                toAddr: req.body.toAddress || '',
            }, {
                transaction
            })

            await models.balanceLogModel.create({
                userId: user.id,
                coin: amount,
                beforeCoin: balance,
                afterCoin: user.balance,
                type: req.body.type,
                remark: '會員出款(' + transferRow.id + ')',
                created: moment().format("YYYY-MM-DD HH:mm:ss"),
                updated: moment().format("YYYY-MM-DD HH:mm:ss"),

            }, {
                transaction: transaction
            })


            let allowanceTimes = setting.allow_times;


            await transaction.commit();
            res.send({
                code: 200,
                message: '操作申請成功，請耐心等待審核！',
                data: {
                    id: transferRow.id,
                },
                allowanceTimes
            })
        } catch (error) {
            await transaction.rollback();
            console.error('withdraw error', error)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    verify: async function (req, res) {
        try {
            let id = 0;
            let username = ''
            if (req.session.userId) {
                id = parseInt(req.session.userId)
                username = req.session.username;
            } else if (req.body.token) {
                let userToken = jwt.verifyToken(req.body.token);
                if (userToken) {
                    id = userToken.id
                    username = userToken.username;
                }
            }

            if (!id) {
                //console.log(id, username)
                res.send({
                    code: 401,
                    message: "請登入會員"
                })
                return;
            }

            if (!req.body.verifyPhoto) {
                res.send({
                    code: 500,
                    message: "請上傳證照"
                })
                return;
            }

            let row = await models.userModel.findOne({
                where: {

                    username: username
                }
            })
            if (row) {
                if (row.verifyStatus == 1 || row.verifyStatus == 2) {
                    res.send({
                        code: 500,
                        message: "驗證任務已經提交，請勿重複申請"
                    })
                    return;
                }
            }

            await models.userModel.update({
                truename: req.body.truename,
                card: req.body.card,
                mobile: req.body.mobile,
                verifyPhoto: req.body.verifyPhoto,
                verifyStatus: 1
            }, {
                where: {
                    id
                }
            })

            await models.cusTaskMode.create({
                taskTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                userName: username,
                type: 3,
                status: 0,
                op: '',
                comment: '',
                info: {
                    id: id,
                    from: 'verify',
                    type: 1,
                    name: req.body.truename,
                    photo: req.body.verifyPhoto,
                    card: req.body.card,
                    mobile: req.body.mobile,
                }
            })

            res.send({
                code: 200,
                message: '上傳成功，請耐心等待審核'
            })
        } catch (error) {
            res.send({
                code: 500,
                message: error.message
            })
        }
    },
    taskVerify: async function (req, res) {
        try {
            let id = 0;
            let username = ''
            if (req.session.userId) {
                id = parseInt(req.session.userId)
                username = req.session.username;
            } else if (req.body.token) {
                let userToken = jwt.verifyToken(req.body.token);
                if (userToken) {
                    id = userToken.id
                    username = userToken.username;
                }
            }

            if (!id) {
                //console.log(id, username)
                res.send({
                    code: 401,
                    message: "請登入會員"
                })
                return;
            }
            if (!req.body.verifyPhoto) {
                res.send({
                    code: 500,
                    message: "請上傳證照"
                })
                return;
            }

            let row = await models.taskModel.findOne({
                where: {
                    platform: req.body.platform,
                    username: username
                },
                order: [['id', 'desc']]
            })

            if (row) {

                if (row.status == 1 || row.status == 2) {
                    res.send({
                        code: 500,
                        message: "任務已經提交，請勿重複申請"
                    })
                    return;
                }
            }

            await models.taskModel.create({
                created: moment().format('YYYY-MM-DD HH:mm:ss'),
                username: username,
                platform: req.body.platform,
                info: req.body.info || '',
                status: 1,//0未验证，1验证中，2验证成功，-1验证失败
                remark: '',
                photo: req.body.verifyPhoto,
                bonus: 0,
                operator: '',

            })

            /*await models.cusTaskMode.create({
                taskTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                userName: req.session.username,
                type: 3,
                status: 0,
                op: '',
                comment: '',
                info: {
                    id: id,
                    from: 'verify',
                    type: 1,
                    name: req.body.truename,
                    photo: req.body.verifyPhoto,
                    card: req.body.card,
                    mobile: req.body.mobile,
                }
            })*/

            res.send({
                code: 200,
                message: '上傳成功，請耐心等待審核'
            })
        } catch (error) {
            res.send({
                code: 500,
                message: error.message
            })
        }
    },
    taskList: async function (req, res) {
        try {
            let userId = 0;
            let username = '';
            if (!req.session.userId) {
                if (req.query.token) {
                    let user = jwt.verifyToken(req.query.token);
                    if (user) {
                        userId = user.id
                        username = user.username
                    }
                }

            } else {
                userId = req.session.userId
                username = req.session.username
            }
            let data = await models.taskPlatformModel.findAll({
                include: {
                    required: false,
                    model: models.taskModel,

                    where: {
                        userName: username,
                        status: {
                            [Op.not]: -1
                        }
                    }
                },


            });

            res.send({
                code: 200,
                message: 'success',
                data
            })
        } catch (ex) {
            console.error('taskList error', ex.message)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    article: async function (req, res) {
        try {

            let data = await models.articleModel.findOne({
                where: {
                    type: req.params.type
                },

            });


            data.content = baseService.formatHtmlContent(data.content);


            res.send({
                code: 200,
                message: 'success',
                data
            })
        } catch (ex) {
            console.error('article error', ex)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    balanceLog: async function (req, res) {
        try {
            let userId = req.session.userId;
            if (!userId) {
                let user = jwt.verifyToken(req.query.token);
                if (user) userId = user.id
            }
            let limit = 20;
            if (req.query.limit) limit = parseInt(req.query.limit);
            let page = 1;
            if (req.query.page) page = parseInt(req.query.page);
            let offset = (page - 1) * limit

            let total = await models.balanceLogModel.count({
                where: {
                    userId
                }
            })

            let rows = await models.balanceLogModel.findAll({
                where: {
                    userId: userId,

                },
                attributes: ['id', 'coin', 'created', 'remark'],
                offset,
                limit: limit,
                order: [['id', 'desc']]
            })

            for (let i in rows) {
                rows[i].dataValues.created = moment(rows[i].created).format("MM-DD HH:mm:ss")
            }

            res.send({
                code: 200,
                data: rows,
                count: total
            })
        } catch (error) {
            console.error(error.message)
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
}

module.exports = web;