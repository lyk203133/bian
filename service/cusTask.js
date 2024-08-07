

let cusTaskService = {

    getTypeName(type) {
        type = parseInt(type)

        let name = ''
        if (type == 1) {
            name = '出款';
        } else if (type == 2) {
            name = '優惠申請';
        } else if (type == 3) {
            name = '實名驗證';
        } else if (type == 4) {
            name = '銀行驗證';
        } else if (type == 5) {
            name = '視訊驗證';
        }
        return name

    },

    getStatusName(status) {
        status = parseInt(status)

        let name = ''
        if (status == 1) {
            name = '駁回';
        } else if (status == 2) {
            name = '成功';
        }
        return name

    }
}

module.exports = cusTaskService
