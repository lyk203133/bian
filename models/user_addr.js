const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class userAddr extends Model { }

userAddr.init({
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
    addr: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    balance: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated: {
        type: DataTypes.DATE,
        allowNull: false
    },

}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'userAddr', // 我们需要选择模型名称
    tableName: 'user_addr',
    timestamps: false
});

module.exports = userAddr;
