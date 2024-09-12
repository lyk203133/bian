const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class PowerLog extends Model { }

PowerLog.init({
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
    power: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    beforePower: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    afterPower: {
        type: DataTypes.INTEGER,
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
    modelName: 'PowerLog', // 我们需要选择模型名称
    tableName: 'power_log',
    timestamps: false
});

module.exports = PowerLog;
