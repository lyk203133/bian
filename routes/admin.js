const express = require('express');
const router = express.Router();

// 导入控制器模块
const loginController = require('../controller/admin/login.js');
const adminController = require('../controller/admin/admin.js');
const userController = require('../controller/admin/user.js');
const levelController = require('../controller/admin/level.js');
const cardlevelController = require('../controller/admin/card_level.js');
const cardController = require('../controller/admin/card.js');
const ticketController = require('../controller/admin/ticket.js');
const transferController = require('../controller/admin/transfer.js');
const articleController = require('../controller/admin/article.js');



const middleware = require('../middleware.js');

// GET 获取藏书编目主页
try {


    router.get('/admin/login', loginController.index);
    router.post('/admin/checklogin', loginController.checklogin);
    router.get('/admin/logout', loginController.logout);

    router.get('/admin/', middleware.adminAuth, adminController.index);
    router.get('/admin/main', middleware.adminAuth, adminController.main);
    router.get('/admin/setting', middleware.adminAuth, adminController.setting);
    router.post('/admin/setting/save', middleware.adminAuth, adminController.settingSave);

    router.get('/admin/user', middleware.adminAuth, userController.index);
    router.get('/admin/user/user_data', middleware.adminAuth, userController.userData);
    router.get('/admin/user_addr', middleware.adminAuth, userController.userAddr);
    router.get('/admin/user/user_addr_data', middleware.adminAuth, userController.userAddrData);
    router.get('/admin/user_addr/status/:id/:status', middleware.adminAuth, userController.addrStatus);

    router.get('/admin/user/add', middleware.adminAuth, userController.add);
    router.get('/admin/user/edit/:id', middleware.adminAuth, userController.edit);
    router.get('/admin/user/status/:id/:status', middleware.adminAuth, userController.status);
    router.post('/admin/user/save', middleware.adminAuth, userController.save);
    router.get('/admin/user/change/:id', middleware.adminAuth, userController.change);
    router.post('/admin/user/change/add', middleware.adminAuth, userController.addbalance);
    router.post('/admin/user/change/sub', middleware.adminAuth, userController.subbalance);

    router.get('/admin/user/balance_log/:id', middleware.adminAuth, userController.balanceLog);
    router.get('/admin/user/balance_log_data/:id', middleware.adminAuth, userController.balanceLogData);
    router.get('/admin/user/power_log/:id', middleware.adminAuth, userController.powerLog);
    router.get('/admin/user/power_log_data/:id', middleware.adminAuth, userController.powerLogData);

    router.get('/admin/user/user_card/:id', userController.userCard);
    router.get('/admin/user/user_card_data/:id', middleware.adminAuth, userController.userCardData);

    router.get('/admin/level', middleware.adminAuth, levelController.index);
    router.get('/admin/level/list_data', middleware.adminAuth, levelController.listData);
    router.get('/admin/level/add', middleware.adminAuth, levelController.add);
    router.get('/admin/level/edit/:id', middleware.adminAuth, levelController.edit);
    router.post('/admin/level/save', middleware.adminAuth, levelController.save);

    router.get('/admin/card/', middleware.adminAuth, cardController.index);
    router.get('/admin/card/list_data', middleware.adminAuth, cardController.listData);
    router.get('/admin/card/add', middleware.adminAuth, cardController.add);
    router.get('/admin/card/edit/:id', middleware.adminAuth, cardController.edit);
    router.post('/admin/card/save', middleware.adminAuth, cardController.save);
    router.get('/admin/card/level', middleware.adminAuth, cardlevelController.index);
    router.get('/admin/card/level/list_data', middleware.adminAuth, cardlevelController.listData);
    router.get('/admin/card/level/add', middleware.adminAuth, cardlevelController.add);
    router.get('/admin/card/level/edit/:id', middleware.adminAuth, cardlevelController.edit);
    router.post('/admin/card/level/save', middleware.adminAuth, cardlevelController.save);

    router.get('/admin/ticket/', middleware.adminAuth, ticketController.index);
    router.get('/admin/ticket/list_data', middleware.adminAuth, ticketController.listData);

    router.get('/admin/transfer/:type', middleware.adminAuth, transferController.index);
    router.get('/admin/transfer/list_data/:type', middleware.adminAuth, transferController.listData);
    router.get('/admin/transfer/status/:id/:status', middleware.adminAuth, transferController.status);
    router.get('/admin/transfer/check/:id', middleware.adminAuth, transferController.check);
    router.post('/admin/transfer/save', middleware.adminAuth, transferController.checkSave);

    router.get('/admin/article/:type', middleware.adminAuth, articleController.index);
    router.get('/admin/article/list_data/:type', middleware.adminAuth, articleController.listData);
    router.get('/admin/article/add/:type', middleware.adminAuth, articleController.add);
    router.get('/admin/article/edit/:id', middleware.adminAuth, articleController.edit);
    router.post('/admin/article/save', middleware.adminAuth, articleController.save);

    router.get('/admin/captcha', loginController.captcha);
    router.get('/admin/heartbeat', function (req, res) {
        res.send({
            code: 0
        })
    });
}
catch (ex) {
    console.error(ex)
}
module.exports = router;
