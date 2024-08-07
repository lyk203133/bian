const Web3Service = require('../../service/web3Service');
const baseService = require('../../service/baseService');
const sequelize = require('../../sequelize.js');
const models = require('../../models/all.js');
const moment = require('moment');
const { hash } = require('crypto');
const transferController = {
    checkTransfer: async function (req, res) {
        try {
            let setting = await baseService.setting();
            const web3Service = new Web3Service();
            const transactionInfo = await web3Service.getTransactionReceipt(req.query.hash, setting.addr_contract)

            const receipt = transactionInfo.receipt;
            //const transInfo = transactionInfo.transaction;
            let to = transactionInfo.toAddress;

            if (to.toLocaleLowerCase() != setting.addr_in.toLocaleLowerCase()) {
                res.send({
                    code: 403,
                    message: '轉入錢包地址非官方地址',
                    data: {
                        to
                    }
                })
                return;
            }

            let transferCheckRow = await models.transferModel.findOne({
                where: {
                    transactionHash: receipt.transactionHash
                }
            })
            if (!transferCheckRow) {
                res.send({
                    code: 404,
                    message: '資料庫中不存在交易記錄'
                })
                return;
            }
            if (transferCheckRow.status == 1) {
                res.send({
                    code: 500,
                    message: '此交易已經成功上分'
                })
                return;
            }

            if (transferCheckRow.type != 1) {
                res.send({
                    code: 500,
                    message: '此交易非轉入訂單'
                })
                return;
            }

            if (!receipt.status) {
                res.send({
                    code: 403,
                    message: '交易失敗'
                })
                await models.transferModel.update({
                    status: -1
                }, {
                    where: {
                        transactionHash: receipt.transactionHash
                    }
                })
                return;
            }


            const transaction = await sequelize.transaction();
            try {



                let transferRow = await models.transferModel.findOne({
                    where: {
                        id: transferCheckRow.id
                    },
                    lock: true,
                    transaction: transaction,
                })
                if (!transferRow) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '數據不存在' });
                    return;
                }

                if (transferRow.status == 1) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '此申請已結束，請忽重提交' });
                    return;
                }

                let remark
                const userRow = await models.userModel.findOne({
                    where: { id: transferRow.userId },
                    lock: true,
                    transaction: transaction,
                });
                if (!userRow) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '會員數據不存在' });
                    return;
                }


                let amount = parseFloat(transferRow.amount);
                let balance = parseFloat(userRow.balance); // 或者使用 Number(user.balance);
                userRow.balance = balance + amount;
                console.log('user new balance', userRow.balance, amount)
                await userRow.save({ transaction: transaction });
                await models.balanceLogModel.create({
                    userId: userRow.id,

                    coin: amount,
                    beforeCoin: balance,
                    afterCoin: userRow.balance,
                    type: transferRow.type,
                    remark: '智能合約轉入:' + req.query.hash,
                    created: moment().format("YYYY-MM-DD HH:mm:ss"),
                    updated: moment().format("YYYY-MM-DD HH:mm:ss"),

                }, {
                    transaction: transaction
                })

                remark = '系統自動審核通過'
                await models.transferModel.update({
                    status: 1,
                    remark
                }, {
                    where: {
                        id: parseInt(transferRow.id)
                    },
                    transaction: transaction
                })
                await transaction.commit();
                console.log('Transaction committed successfully.');

                res.send({ code: 0, message: "轉入成功", data: receipt });
                return;
            } catch (ex) {
                await transaction.rollback();
                console.log(ex)
                res.send({ code: 500, message: ex.message });
                return;
            }

        } catch (error) {
            console.error('Error fetching transaction details:', error);
            res.send({
                code: 500,
                message: error.message
            })
        }
    },
    checkWithdraw: async function (req, res) {
        try {
            let setting = await baseService.setting();
            const web3Service = new Web3Service();
            const transactionInfo = await web3Service.getTransactionReceipt(req.query.hash, setting.addr_contract)

            const receipt = transactionInfo.receipt;
            //const transInfo = transactionInfo.transaction;
            let to = transactionInfo.toAddress;
            let from = transactionInfo.fromAddress;



            let transferCheckRow = await models.transferModel.findOne({
                where: {
                    transactionHash: receipt.transactionHash
                }
            })
            if (!transferCheckRow) {
                res.send({
                    code: 404,
                    message: '資料庫中不存在交易記錄'
                })
                return;
            }

            /*if (from.toLocaleLowerCase() != transferCheckRow.fromAddr.toLocaleLowerCase()) {
                res.send({
                    code: 403,
                    message: '非官方錢包地址轉出',
                    data: {
                        transactionFrom: from,
                        transactionTo: to,
                        toAddr: transferCheckRow.toAddr
                    }
                })
                return;
            }*/

            if (to.toLocaleLowerCase() != transferCheckRow.toAddr.toLocaleLowerCase()) {
                res.send({
                    code: 403,
                    message: '非會員錢包地址轉入',
                    data: {
                        transactionFrom: from,
                        transactionTo: to,
                        toAddr: transferCheckRow.toAddr
                    }
                })
                return;
            }


            if (transferCheckRow.status == 1) {
                res.send({
                    code: 500,
                    message: '此交易已經成功轉出'
                })
                return;
            }

            if (transferCheckRow.type != 2) {
                res.send({
                    code: 500,
                    message: '此交易非轉出訂單'
                })
                return;
            }

            if (!receipt.status) {
                res.send({
                    code: 403,
                    message: '交易失敗'
                })
                await models.transferModel.update({
                    status: -1
                }, {
                    where: {
                        transactionHash: receipt.transactionHash
                    }
                })
                return;
            }


            const transaction = await sequelize.transaction();
            try {
                let transferRow = await models.transferModel.findOne({
                    where: {
                        id: transferCheckRow.id
                    },
                    lock: true,
                    transaction: transaction,
                })
                if (!transferRow) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '數據不存在' });
                    return;
                }

                if (transferRow.status == 1) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '此申請已結束，請忽重提交' });
                    return;
                }

                let remark = '系統自動審核通過'
                await models.transferModel.update({
                    status: 1,
                    remark
                }, {
                    where: {
                        id: parseInt(transferRow.id)
                    },
                    transaction: transaction
                })
                await transaction.commit();
                console.log('Transaction committed successfully.');

                res.send({ code: 0, message: "轉出成功", data: receipt });
                return;
            } catch (ex) {
                await transaction.rollback();
                console.log(ex)
                res.send({ code: 500, message: ex.message });
                return;
            }

        } catch (error) {
            console.error('Error fetching transaction details:', error);
            res.send({
                code: 500,
                message: error.message
            })
        }
    },
    checkWithdraw2: async function (req, res) {
        try {
            let setting = await baseService.setting();
            const web3Service = new Web3Service();
            const transactionInfo = await web3Service.getTransactionReceipt(req.query.hash, setting.addr_contract)

            const receipt = transactionInfo.receipt;
            //const transInfo = transactionInfo.transaction;
            let to = transactionInfo.toAddress;
            let from = transactionInfo.fromAddress;



            let transferCheckRow = await models.transferModel.findOne({
                where: {
                    transactionHash: receipt.transactionHash
                }
            })
            if (!transferCheckRow) {
                res.send({
                    code: 404,
                    message: '資料庫中不存在交易記錄'
                })
                return;
            }

            if (from.toLocaleLowerCase() != transferCheckRow.fromAddr.toLocaleLowerCase()) {
                res.send({
                    code: 403,
                    message: '非官方錢包地址轉出',
                    data: {
                        transactionFrom: from,
                        transactionTo: to,
                        toAddr: transferCheckRow.toAddr
                    }
                })
                return;
            }

            if (to.toLocaleLowerCase() != transferCheckRow.toAddr.toLocaleLowerCase()) {
                res.send({
                    code: 403,
                    message: '非會員錢包地址轉入',
                    data: {
                        transactionFrom: from,
                        transactionTo: to,
                        toAddr: transferCheckRow.toAddr
                    }
                })
                return;
            }


            if (transferCheckRow.status == 1) {
                res.send({
                    code: 500,
                    message: '此交易已經成功轉出'
                })
                return;
            }

            if (transferCheckRow.type != 2) {
                res.send({
                    code: 500,
                    message: '此交易非轉出訂單'
                })
                return;
            }

            if (!receipt.status) {
                res.send({
                    code: 403,
                    message: '交易失敗'
                })
                await models.transferModel.update({
                    status: -1
                }, {
                    where: {
                        transactionHash: receipt.transactionHash
                    }
                })
                return;
            }


            const transaction = await sequelize.transaction();
            try {



                let transferRow = await models.transferModel.findOne({
                    where: {
                        id: transferCheckRow.id
                    },
                    lock: true,
                    transaction: transaction,
                })
                if (!transferRow) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '數據不存在' });
                    return;
                }

                if (transferRow.status == 1) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '此申請已結束，請忽重提交' });
                    return;
                }

                let remark
                const userRow = await models.userModel.findOne({
                    where: { id: transferRow.userId },
                    lock: true,
                    transaction: transaction,
                });
                if (!userRow) {
                    await transaction.rollback();
                    res.send({ code: 500, message: '會員數據不存在' });
                    return;
                }

                let amount = parseFloat(transferRow.amount);
                let balance = parseFloat(userRow.balance); // 或者使用 Number(user.balance);
                if (balance < Math.abs(amount) + transferRow.fee) {
                    await transaction.rollback();
                    let message = ({ code: 500, message: '余额不足' })
                    res.send(message)
                    return;
                }
                amount += transferRow.fee;
                userRow.balance = balance - amount;

                console.log('user new balance', userRow.balance, amount)
                await userRow.save({ transaction: transaction });
                await models.balanceLogModel.create({
                    userId: userRow.id,

                    coin: amount,
                    beforeCoin: balance,
                    afterCoin: userRow.balance,
                    type: transferRow.type,
                    remark: '智能合約轉出:' + req.query.hash + ',手續費:' + transferRow.fee,
                    created: moment().format("YYYY-MM-DD HH:mm:ss"),
                    updated: moment().format("YYYY-MM-DD HH:mm:ss"),

                }, {
                    transaction: transaction
                })

                remark = '系統自動審核通過'
                await models.transferModel.update({
                    status: 1,
                    remark
                }, {
                    where: {
                        id: parseInt(transferRow.id)
                    },
                    transaction: transaction
                })
                await transaction.commit();
                console.log('Transaction committed successfully.');

                res.send({ code: 0, message: "轉出成功", data: receipt });
                return;
            } catch (ex) {
                await transaction.rollback();
                console.log(ex)
                res.send({ code: 500, message: ex.message });
                return;
            }

        } catch (error) {
            console.error('Error fetching transaction details:', error);
            res.send({
                code: 500,
                message: error.message
            })
        }
    }
}


module.exports = transferController;