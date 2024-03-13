const express = require("express");
const app = express();
const mysql = require("mysql"); // or require('mysql2');
const dbConfig = require("./config/db.js");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const corsOptions = {
  optionsSuccessStatus: 200, // For legacy browser support
  credentials: true, // This is important.
  origin: "*",
};

dotenv.config();

const pool = mysql.createPool(dbConfig);

const connectDB = () => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to database: ", err);
      return;
    }
    console.log("Connected to MariaDB database!");
    connection.release(); // Release the connection
  });
};
connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
