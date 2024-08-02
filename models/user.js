const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class User extends Model { }

User.init({
    // 在这里定义模型属性
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    balance: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    lv: {
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
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
    },


}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'User', // 我们需要选择模型名称
    tableName: 'users',
    timestamps: false
});

module.exports = User;
