const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const corsOptions = {
  optionsSuccessStatus: 200, // For legacy browser support
  credentials: true, // This is important.
  origin: "*",
};
const connectDB = require("./config/connection");
connectDB();
dotenv.config();

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const userRoutes = require("./routes/user.routes");
app.use("/users", userRoutes);

const employeeRoutes = require("./routes/employee.routes");
app.use("/employees", employeeRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
