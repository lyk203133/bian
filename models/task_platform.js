const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class TaskPlatform extends Model { }

TaskPlatform.init({
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

}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'TaskPlatform', // 我们需要选择模型名称
    tableName: 'task_platform',
    timestamps: false
});

module.exports = TaskPlatform;
