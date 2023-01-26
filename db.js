const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function dbconnection() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.k1mvsfr.mongodb.net/?retryWrites=true&w=majority`);

    console.log("connected.");
}

dbconnection().catch((err) => console.log(err));

module.exports = dbconnection;

