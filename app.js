const express = require("express");
const router = require("./routes/picture");

const app = express();

require("dotenv").config();
require("./db");

app.use("/pictures", router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});