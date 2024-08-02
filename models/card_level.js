const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class CardLevel extends Model { }

CardLevel.init({
    // 在这里定义模型属性
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },

    coin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    profit: {
        type: DataTypes.INTEGER,
        allowNull: false
    },



}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'CardLevel', // 我们需要选择模型名称
    tableName: 'card_level',
    timestamps: false
});

module.exports = CardLevel;
