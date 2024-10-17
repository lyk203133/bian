const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize.js')

class Market extends Model { }

Market.init({
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    symbol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    intervalTime: {
        type: DataTypes.STRING,
        allowNull: false
    },
    openTime: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '1'
    },
    closeTime: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: '1'
    },
    openPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: '1'
    },
    highPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: '1'
    },
    lowPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: '1'
    },
    lastPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: '1'
    },
    volume: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: '1'
    },
    tradeVolume: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: '1'
    },
    tradeCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: ''
    },
    created: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
    },
    openType: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0'
    },
}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'Market', // 我们需要选择模型名称
    tableName: 'market',
    timestamps: false
});

module.exports = Market;