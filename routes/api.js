const express = require('express');
const router = express.Router();

// 导入控制器模块
const apiController = require('../controller/api/api.js');



const middleware = require('../middleware.js');

// GET 获取藏书编目主页
try {
    router.get('/api/games', middleware.api, apiController.getGames);
    router.post('/api/createUser', middleware.api, apiController.createUser);
    router.post('/api/getBalance', middleware.api, apiController.getBalance);
    router.post('/api/transferIn', middleware.api, apiController.transferIn);
    router.post('/api/transferOut', middleware.api, apiController.transferOut);

    router.post('/api/login', middleware.api, apiController.login)

    router.post('/api/getGameLog', middleware.api, apiController.getGameLog);

}
catch (ex) {
    console.log(ex)
}
module.exports = router;
