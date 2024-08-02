const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class Setting extends Model { }

Setting.init({
    // 在这里定义模型属性
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    site: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addr_in: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addr_out: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amounts: {
        type: DataTypes.STRING,
        allowNull: false
    },
    updated: {
        type: DataTypes.DATE,
        allowNull: false
    },


}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'Setting', // 我们需要选择模型名称
    tableName: 'setting',
    timestamps: false
});

module.exports = Setting;
