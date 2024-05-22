const express = require("express");
const connectDatabase = require("./models/database");
const User = require("./models/user");
const app = express();

connectDatabase();

require('./routes/user')(app);

app.listen(5000, () => {
    console.log("Server started on port 5000");
})