import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql"
});

export default db;