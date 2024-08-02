const express = require('express');
const router = express.Router();

// 导入控制器模块
const loginController = require('../controller/agent/login.js');
const agentController = require('../controller/agent/agent.js');



const middleware = require('../middleware.js');

// GET 获取藏书编目主页
try {


    router.get('/agent/login', loginController.index);
    router.post('/agent/checklogin', loginController.checklogin);
    router.get('/agent/logout', loginController.logout);

    router.get('/agent/', middleware.agentAuth, agentController.index);
    router.get('/agent/main', middleware.agentAuth, agentController.main);
    router.get('/agent/club', middleware.agentAuth, agentController.club);
    router.get('/agent/club_data', middleware.agentAuth, agentController.clubData);
    router.get('/agent/club/member', middleware.agentAuth, agentController.clubMember);
    router.get('/agent/club/member_data', middleware.agentAuth, agentController.clubMemberData);
    router.get('/agent/club/game', middleware.agentAuth, agentController.game);
    router.get('/agent/club/game_data', middleware.agentAuth, agentController.gameData);
    router.post('/agent/club/game_save', middleware.agentAuth, agentController.gameSave);

    router.get('/agent/user', middleware.agentAuth, agentController.user);
    router.get('/agent/user/user_club', middleware.agentAuth, agentController.userClub);
    router.post('/agent/user/join_club', middleware.agentAuth, agentController.joinClub);
    router.post('/agent/user/kickout_club', middleware.agentAuth, agentController.kickoutClub);
    router.get('/agent/user/user_data', middleware.agentAuth, agentController.userData);

    router.get('/agent/captcha', loginController.captcha);
    router.get('/agent/heartbeat', function (req, res) {
        res.send({
            code: 0
        })
    });
}
catch (ex) {
    console.log(ex)
}
module.exports = router;
