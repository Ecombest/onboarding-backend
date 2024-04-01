const express = require("express");

const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const { logger, errorHandler } = require("./middleware");
const corsOptions = {
  optionsSuccessStatus: 200, // For legacy browser support
  credentials: true, // This is important.
  origin: "*",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

const connect = require("./config/connect");
connect();

app.use(logger);

const templateRoute = require("./routes/template.routes");
app.use("/template", templateRoute);

const layerRoute = require("./routes/layer.routes");
app.use("/layer", layerRoute);

const optionSetRoute = require("./routes/option-set.routes");
app.use("/option-set", optionSetRoute);
const optionRoute = require("./routes/option.routes");
app.use("/option", optionRoute);

const functionRoute = require("./routes/function.routes");
app.use("/function", functionRoute);

const campaignRoute = require("./routes/campaign.routes");
app.use("/campaign", campaignRoute);

app.use(errorHandler);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
