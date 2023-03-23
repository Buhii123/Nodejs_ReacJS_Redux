
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('datatest', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
});
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connect Data base Thành công!')
    } catch (cerror) {
        console.log('ko kết nối database')
    }

}
module.exports = connectDB;