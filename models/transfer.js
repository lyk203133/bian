const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class Transfer extends Model { }

Transfer.init({
    // 在这里定义模型属性
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    remark: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    amount: {
        type: DataTypes.DECIMAL,
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
    receipt:{
        type:DataTypes.JSON,
        allowNull:false
    }


}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'Transfer', // 我们需要选择模型名称
    tableName: 'transfer',
    timestamps: false
});

module.exports = Transfer;
