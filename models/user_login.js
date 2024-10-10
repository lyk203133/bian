const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class userLogin extends Model { }

userLogin.init({
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
    ip: {
        type: DataTypes.STRING,
        allowNull: true,
    },
     
    userAgent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginTime: {
        type: DataTypes.DATE,
        allowNull: false
    },

}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'userLogin', // 我们需要选择模型名称
    tableName: 'user_login',
    timestamps: false
});

module.exports = userLogin;
