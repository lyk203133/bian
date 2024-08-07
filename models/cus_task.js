const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class CusTask extends Model { }

CusTask.init({
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    taskTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    type: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '1'
    },
    status: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '1'
    },
    op: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '1'
    },
    comment: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: ''
    },
    info: {
        type: DataTypes.JSON,
        allowNull: true
    },
}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'CusTask', // 我们需要选择模型名称
    tableName: 'cus_task',
    timestamps: false
});



module.exports = CusTask;