import { Sequelize } from "sequelize";

const db = new Sequelize("freedb_catatan", "freedb_db_catatan", "$SK@*3*rXbgZVfd", {
    host: "sql.freedb.tech",
    dialect: "mysql"
});

export default db;