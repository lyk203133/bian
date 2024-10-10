let jwtHelper = require('./module/jwt.js')

const middleware = {
    api: (req, res, next) => {
        console.log('req url', req.url);

        if (req.query) console.log('api query:', JSON.stringify(req.query))
        if (req.body) console.log('api body:', JSON.stringify(req.body))
        next();
    },

    apiToken: (req, res, next) => {
        console.log('req url', req.url);

        if (req.query) console.log('api query:', JSON.stringify(req.query))
        if (req.query.token) console.log('api token:', JSON.stringify(req.query.token))
        if (!req.query.token) {
            res.statusCode = 403;
            res.send({ code: 403, message: '没有权限' })
            return;
        }
        let token = req.query.token;
        let payload = null;
        try {
            payload = jwtHelper.verifyToken(token);
        } catch (ex) {
            console.log(' token parse error')
            //log.writeLog(' token parse error')
            //console.log(ex.message)
        }

        if (!payload) {
            res.statusCode = 403;
            res.send({ code: 403, message: 'token错误' })
            return;
        }
        req.payload = payload

        next();
    },
    jwtToken: (req, res, next) => {
        console.log('req url', req.url);

        if (req.query) console.log('api query:', JSON.stringify(req.query))
        if (req.query.token) console.log('api token:', JSON.stringify(req.query.token))
        let token = req.query.token;
        if (!token) token = req.header.token;
        let payload = null;
        try {
            payload = jwtHelper.verifyToken(token);
        } catch (ex) {
            console.log(' token parse error')
            //log.writeLog(' token parse error')
            //console.log(ex.message)
        }
        req.token = payload

        next();
    },
    adminAuth: (req, res, next) => {
        if (req.session.loginAdminUser == undefined ) {
            res.redirect('/admin/login')
            return;
        }
        
        console.log(req.session.loginUser)
        next();
    },
    kongAuth: (req, res, next) => {
        if (req.session.loginAdminUser == undefined) {
            res.redirect('/admin/login')
            return;
        }
        console.log(req.session.loginUser)
        next();
    },
    agentAuth: (req, res, next) => {
        // log.writeLog('api body:' + JSON.stringify(req.body))
        // log.writeLog('api query:' + JSON.stringify(req.query))
        if (req.session.agentUser == undefined) {
            res.redirect('/agent/login')
            return;
        }

        console.log(req.session.agentUser)
        next();
    },
    userAuth: (req, res, next) => {
        // log.writeLog('api body:' + JSON.stringify(req.body))
        // log.writeLog('api query:' + JSON.stringify(req.query))
        if (req.session.lineId == undefined) {
            res.redirect('/linelogin')
            return;
        }

        console.log(req.session.agentUser)
        next();
    }
}

module.exports = middleware;
