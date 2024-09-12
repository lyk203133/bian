
let userService = {
    getVerifyStatusInfo: function (verifyStatus, defaultColor = 'black') {
        let verifyStatusName = '未驗證';
        let verifyStatusColor = defaultColor;
        if (verifyStatus == 1) {
            verifyStatusName = '驗證中'
            verifyStatusColor = 'orange'
        }
        else if (verifyStatus == 2) {
            verifyStatusName = '驗證成功'
            verifyStatusColor = 'green'
        }
        else if (verifyStatus == 4) {
            verifyStatusName = '驗證失敗'
            verifyStatusColor = 'red'
        }

        return {
            verifyStatusName,
            verifyStatusColor
        }
    }
}
module.exports = userService