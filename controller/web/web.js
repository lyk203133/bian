
const moment = require('moment');
const ChineseRandomName = require('chinese-random-name');
const { Sequelize, Op, DataTypes, QueryTypes, Model } = require('sequelize');
const sequelize = require('../../sequelize.js');
const userModel = require('../../models/user.js');
const levelModel = require('../../models/level.js');
const models = require('../../models/all.js');
const session = require('express-session');
const crypto = require('crypto-js');
const { default: axios } = require('axios');

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
            console.log(password, salt)

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
    user: async function (req, res) {
        let setting = null;
        let articles = [];
        let privateInfo = [];
        try {
            setting = await models.settingModel.findOne();
            articles = await models.articleModel.findAll({
                where: {
                    status: 1
                }
            });
        } catch (ex) {
            console.error(ex.message)
        }
        res.render('web/user', {
            addr: req.session.username || '',
            setting,
            responsibility: articles.filter(t => t.type == 1),
            privateInfo: articles.filter(t => t.type == 2),
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
                        code: 401,
                        message: '請檢查帳密'
                    })
                    return;
                }
            } else {

                res.send({
                    code: 401,
                    message: '請檢查帳密'
                })
                return;
            }

            console.log(req.session.lineId, req.session.userId)
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

            let user = await models.userModel.findOne({
                where: {
                    username: addr
                }
            });
            if (user) {
                req.session.userId = user.id;
                req.session.username = user.username;

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
                })
                req.session.userId = user.id;
                req.session.username = addr;

            }

            console.log(req.session.username, req.session.userId)
            res.send({
                code: 200,
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
        if (!req.session.userId) {
            res.send({
                code: 401,
                message: '請登入'
            })
            return;
        }
        try {

            let user = await userModel.findOne({
                where: {
                    id: req.session.userId
                }
            });

            let level = await levelModel.findOne({
                where: {
                    id: {
                        [Op.gte]: user.lv
                    }
                },
                limit: 1,
                order: [['id', 'asc']]
            })

            let nextLevel = await levelModel.findOne({
                where: {
                    id: {
                        [Op.gt]: user.lv
                    }
                },
                limit: 1,
                order: [['id', 'asc']]
            })

            user.dataValues.levelInfo = level;
            user.dataValues.nextLevelInfo = nextLevel;
            if (nextLevel)
                user.dataValues.coinPercent = parseFloat(user.balance / nextLevel.coin) * 100;
            else {
                user.dataValues.coinPercent = 100;
                nextLevel = {
                    coin: 0
                }
            }

            if (user.dataValues.coinPercent > 100) user.dataValues.coinPercent = 100;
            console.log(user.balance, level.coin, user.dataValues.coinPercent);
            res.send({
                code: 200,
                message: 'success',
                data: user
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
        if (!req.session.userId) {
            res.send({
                code: 401,
                message: '請登入'
            })
            return;
        }

        const transaction = await sequelize.transaction();
        try {

            let user = await userModel.findOne({
                where: {
                    id: req.session.userId
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
            let quantity = parseInt(req.body.quantity);
            if (user.balance < quantity) {
                await transaction.rollback();
                res.send({
                    code: 401,
                    message: '餘額不足'
                })
                return;
            }

            let beforeCoin = user.balance;
            user.balance = user.balance - quantity;
            await user.save({ transaction: transaction });

            await models.ticketModel.create({
                no: moment().format("YYMMDDHHmmss") + req.session.userId,
                userId: req.session.userId,
                pair: req.body.pair,
                betType: parseInt(req.body.betType),
                price: parseFloat(req.body.price),
                status: 0,
                resultPrice: 0,
                fee: 0,
                result: 0,
                quantity: quantity,
                remark: '',
                created: moment().format('YYYY-MM-DD HH:mm:ss'),
                updated: moment().format('YYYY-MM-DD HH:mm:ss'),
            }, {
                transaction: transaction
            })

            await models.balanceLogModel.create({
                userId: req.session.userId,

                coin: quantity,
                beforeCoin,
                afterCoin: user.balance,
                type: 1,
                remark: '下單扣款',
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
            let rows = await models.ticketModel.findAll({
                where: {
                    userId: req.session.userId,
                    status: {
                        [Op.gte]: 0
                    }
                },
                limit: 10,
                order: [['id', 'desc']]
            })

            for (let i in rows) {
                rows[i].dataValues.created = moment(rows[i].created).format("HH:mm:ss")
            }

            res.send({
                code: 200,
                data: rows
            })
        } catch (error) {
            res.send({
                code: 500,
                message: 'error'
            })
        }
    },
    cancelTicket: async function (req, res) {
        try {
            let id = parseInt(req.query.id)
            let ticket = await models.ticketModel.findOne({
                where: {
                    id
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
            let rows = await models.ticketModel.findAll({
                where: {
                    status: 0,

                }
            })

            //获取价格
            let url = 'https://api.binance.com/api/v3/ticker/price?symbols=[%22BTCUSDT%22,%22BNBUSDT%22,%22ETHUSDT%22,%22USDCUSDT%22]'
            let reqData = await axios.get(url)

            let result = reqData.data;
            console.log(result)
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



                console.log('success')

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
            if (!req.session.userId) {
                res.send({
                    code: 401,
                    message: '請登入'
                })
                return;
            }

            let amount = parseFloat(req.body.amount)
            if (!req.body.amount || amount < 1) {
                res.send({
                    code: 500,
                    message: '请填正确金额'
                })
                return;
            }
            let user = await models.userModel.findOne({
                where: {
                    id: req.session.userId
                }
            })
            if (!user) {
                res.send({
                    code: 404,
                    message: '會員不存在'
                })
                return;
            }

            let type = parseInt(req.body.type)
            if (type == 2 && amount > user.balance) {
                res.send({
                    code: 500,
                    message: '餘額不足'
                })
                return;
            }
            await models.transferModel.create({
                type: req.body.type,
                userId: req.session.userId,
                amount,
                status: 0,
                remark: '',
                created: moment().format("YYYY-MM-DD HH:mm:ss"),
                updated: moment().format("YYYY-MM-DD HH:mm:ss"),
                receipt: ''
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
    }
}

module.exports = web;