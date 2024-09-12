
const userModel = require("./user.js");
const balanceLogModel = require("./balance_log.js");
const powerLogModel = require("./power_log.js");
const adminModel = require("./admin.js");
const levelModel = require("./level.js");
const cardLevelModel = require("./card_level.js");
const cardModel = require("./card.js");
const userCardModel = require("./user_card.js");
const userAddrModel = require("./user_addr.js");
const ticketModel = require("./ticket.js");
const transferModel = require("./transfer.js");
const settingModel = require("./setting.js");
const articleModel = require("./article.js");
const cusTaskMode = require("./cus_task.js");
const marketModel = require("./market.js");
const taskModel = require("./task.js");
const taskPlatformModel = require("./task_platform.js");
userModel.hasMany(balanceLogModel, { foreignKey: 'userId' })
userModel.hasMany(powerLogModel, { foreignKey: 'userId' })
userModel.hasOne(levelModel, { foreignKey: 'lv', targetKey: 'id' });
userModel.hasMany(userCardModel, { foreignKey: 'userId', targetKey: 'id' });
userCardModel.belongsTo(cardModel, { foreignKey: 'cardId', targetKey: 'id' });
userCardModel.belongsTo(userModel, { foreignKey: 'userId', targetKey: 'id' });
userCardModel.belongsTo(cardLevelModel, { foreignKey: 'lvId', targetKey: 'id' });
userModel.hasMany(userAddrModel, { foreignKey: 'userId' })
ticketModel.belongsTo(userModel, { foreignKey: 'userId', targetKey: 'id' });
transferModel.belongsTo(userModel, { foreignKey: 'userId', targetKey: 'id' });
taskModel.belongsTo(taskPlatformModel, { foreignKey: 'platform', });
taskPlatformModel.hasOne(taskModel, { foreignKey: 'platform' });
module.exports = {
    adminModel,
    userModel,
    balanceLogModel,
    powerLogModel,
    levelModel,
    cardLevelModel,
    cardModel,
    userCardModel,
    userAddrModel,
    ticketModel,
    transferModel,
    settingModel,
    articleModel,
    cusTaskMode,
    marketModel,
    taskModel,
    taskPlatformModel

};