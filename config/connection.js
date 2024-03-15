const pool = require("./db");
const testConnection = async () => {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log("Connected to MariaDB!");
  } catch (err) {
    console.error("Error connecting to MariaDB:", err);
  } finally {
    if (conn) return conn.end();
  }
};

module.exports = testConnection;
