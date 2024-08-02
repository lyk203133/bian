const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class BalanceLog extends Model { }

BalanceLog.init({
    // 在这里定义模型属性
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    coin: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    beforeCoin: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    afterCoin: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    created: {
        type: DataTypes.DATE,
        allowNull: false
    },

    remark: {
        type: DataTypes.STRING,
        allowNull: true
    },


}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'BalanceLog', // 我们需要选择模型名称
    tableName: 'balance_log',
    timestamps: false
});

module.exports = BalanceLog;
