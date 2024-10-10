const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const crypto = require("crypto");
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
const cusTaskController = require('../controller/admin/cusTask.js');
const taskController = require('../controller/admin/task.js');
const marketTaskController = require('../controller/admin/market.js');


const middleware = require('../middleware.js');

// GET 获取藏书编目主页
try {


    router.get('/admin/login', loginController.index);
    router.post('/admin/checklogin', loginController.checklogin);
    router.get('/admin/logout', loginController.logout);

    router.get('/admin/', middleware.adminAuth, adminController.index);
    router.get('/admin/main', middleware.adminAuth, adminController.main);
    router.get('/admin/menu', middleware.adminAuth, adminController.menu);
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
    router.get('/admin/user/allowance/:id/:status', middleware.adminAuth, userController.allowance);
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
    router.get('/admin/user/verify/:id', middleware.adminAuth, userController.verify);

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
    router.post('/admin/transfer/update_hash', middleware.adminAuth, transferController.updateHash);
    router.get('/admin/transfer/findone/:id', middleware.adminAuth, transferController.findOne);
    router.post('/admin/withdraw/fail/:id', middleware.adminAuth, transferController.withdrawFail);
    router.get('/admin/transfer/open_trans/:to/:amount/:id', middleware.adminAuth, transferController.openTrans);
    router.get('/admin/transfer-summary', middleware.adminAuth, transferController.summary);
    router.get('/admin/transfer-summary/data', middleware.adminAuth, transferController.summaryData);

    router.get('/admin/article/:type', middleware.adminAuth, articleController.index);
    router.get('/admin/article/list_data/:type', middleware.adminAuth, articleController.listData);
    router.get('/admin/article/add/:type', middleware.adminAuth, articleController.add);
    router.get('/admin/article/edit/:id', middleware.adminAuth, articleController.edit);
    router.post('/admin/article/save', middleware.adminAuth, articleController.save);

    router.get('/admin/cus_task/', middleware.adminAuth, cusTaskController.index);
    router.get('/admin/cus_task/list_data', middleware.adminAuth, cusTaskController.list_data);
    router.get('/admin/cus_task/record', middleware.adminAuth, cusTaskController.record);
    router.get('/admin/cus_task/:id', middleware.adminAuth, cusTaskController.comment);
    router.post('/admin/cus_task/save', middleware.adminAuth, cusTaskController.save);
    router.get('/admin/cus_task/info/:id', middleware.adminAuth, cusTaskController.info);

    router.get('/admin/task/', middleware.adminAuth, taskController.index);
    router.get('/admin/task/list_data', middleware.adminAuth, taskController.list_data);
    router.get('/admin/task/record', middleware.adminAuth, taskController.record);
    router.get('/admin/task/:id', middleware.adminAuth, taskController.comment);
    router.post('/admin/task/save', middleware.adminAuth, taskController.save);
    router.get('/admin/task/info/:id', middleware.adminAuth, taskController.info);

    router.get('/admin/market', middleware.adminAuth, marketTaskController.index);
    router.get('/admin/market/make', marketTaskController.makeData);
    router.get('/admin/market/list_data', middleware.adminAuth, marketTaskController.list_data);
    router.post('/admin/market/win1', middleware.adminAuth, marketTaskController.win1);
    router.post('/admin/market/win2', middleware.adminAuth, marketTaskController.win2);
    router.post('/admin/market/win_future', middleware.adminAuth, marketTaskController.winFuture);

    router.get('/admin/captcha', loginController.captcha);
    router.get('/admin/heartbeat', function (req, res) {
        res.send({
            code: 0
        })
    });

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/uploads');
        },
        filename: function (req, file, cb) {
            cb(null, crypto.randomUUID() + '.png');
        }
    })
    const fileFilter = (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;  // 支持的图片格式
        const mimeType = fileTypes.test(file.mimetype);  // 验证 MIME 类型
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());  // 验证文件扩展名

        if (mimeType && extName) {
            return cb(null, true);
        } else {
            cb(new Error('只能上传图片文件'));  // 返回错误信息
        }
    };

    var upload = multer({
        storage: storage,
        fileFilter: fileFilter
    })
    router.post('/admin/upload/', upload.single('file'), (req, res) => {
        try {
            console.log(req);
            // 接收到上传请求后，Multer将文件存储到指定目录
            // req.file是上传文件的信息对象
            // req.body包含上传表单的其他字段
            if (!req.file) {
                return res.status(400).send('未选择任何文件');
            }
            // 获取上传文件的完整路径
            const filePath = req.file.destination.slice(1) + '/' + req.file.filename;
            // 处理文件，比如存储到数据库、返回给客户端等
            // ...

            // 返回成功响应
            res.status(200).send({ code: 0, msg: '上传成功', data: { src: filePath, title: '' } });
        } catch (ex) {
            res.status(400).send({
                code: 500,
                msg: ex.message
            })
        }
    });
}
catch (ex) {
    console.error(ex)
}
module.exports = router;
