const dbConfig = require("./dbConfig");

const mariadb = require("mariadb");
const pool = mariadb.createPool(dbConfig);

module.exports = pool;
