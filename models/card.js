const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class Card extends Model { }

Card.init({
    // 在这里定义模型属性
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cardId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    lv: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },



}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'Card', // 我们需要选择模型名称
    tableName: 'card',
    timestamps: false
});

module.exports = Card;
