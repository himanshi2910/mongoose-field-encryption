const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017";

const connectDatabase = async () => {
    mongoose.connect(uri).then(() => {
        console.log("Database connected")
    }).catch((error) => {
        console.log("An error occurred:", error);
    })
};

module.exports = connectDatabase;