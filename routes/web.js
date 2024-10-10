const express = require('express');
const router = express.Router();

// 导入控制器模块
const webController = require('../controller/web/web.js');
const marketController = require('../controller/web/market.js');
const transferController = require('../controller/web/transfer.js');
const middleware = require('../middleware.js');

// GET 获取藏书编目主页
try {
    router.post('/register', webController.register);
    router.post('/login', webController.login);
    router.post('/walletlogin', webController.walletlogin);
    router.get('/logout', webController.logout);

    router.post('/changepwd', webController.changepwd);

    router.get('/', webController.index);

    router.get('/profile', webController.profile);
    router.get('/kuang', webController.kuang);

    router.get('/market', marketController.market);
    router.get('/market_data', marketController.marketData);
    router.get('/market/last', marketController.marketDataLast);

    router.get('/task', webController.task);
    router.get('/task/list', webController.taskList);
    router.get('/user', webController.user);

    router.get('/walletTransfer', webController.walletTransfer);
    router.get('/pricing', marketController.pricing);
    router.get('/article/:type', webController.article);

    router.post('/buy', webController.buy);
    router.get('/ticket/history', webController.buyHistory);
    router.get('/ticket/cancel', webController.cancelTicket);
    router.get('/ticket/calculate', webController.calculateTicket);
    router.post('/transfer', webController.transfer);
    router.get('/transfer/check', transferController.checkTransfer);
    router.get('/transfer/check_withdraw', transferController.checkWithdraw);
    router.post('/withdraw', webController.withdraw);
    router.post('/verify', webController.verify);
    router.post('/task/verify', webController.taskVerify);

    router.get('/transfer/recharge', transferController.listData);
    router.get('/setting', webController.setting);
    router.get('/balance-log', webController.balanceLog);
}
catch (ex) {
    console.log(ex)
}
module.exports = router;
