const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class Level extends Model { }

Level.init({
    // 在这里定义模型属性
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lv: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    max: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    profit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    powerProfit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cardfee: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clickfee: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    powerfee: {
        type: DataTypes.INTEGER,
        allowNull: false
    },


}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'Level', // 我们需要选择模型名称
    tableName: 'level',
    timestamps: false
});

module.exports = Level;
