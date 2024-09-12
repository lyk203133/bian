const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class userCard extends Model { }

userCard.init({
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
    cardId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    lvId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated: {
        type: DataTypes.DATE,
        allowNull: false
    },
    profitTime: {
        type: DataTypes.DATE,
        allowNull: false
    }


}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'userCard', // 我们需要选择模型名称
    tableName: 'user_card',
    timestamps: false
});

module.exports = userCard;
