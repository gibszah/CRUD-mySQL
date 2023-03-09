import { Sequelize } from "sequelize";

const db = new Sequelize("tbl_user", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
