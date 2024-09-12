const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class Ticket extends Model { }

Ticket.init({
    // 在这里定义模型属性
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },

    no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pair: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    betType: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    resultPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    fee: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    buyTime: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    resultTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    buySecond: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    result: {
        type: DataTypes.DECIMAL,
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

    remark: {
        type: DataTypes.STRING,
        allowNull: false
    },




}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'Ticket', // 我们需要选择模型名称
    tableName: 'ticket',
    timestamps: false
});

module.exports = Ticket;
