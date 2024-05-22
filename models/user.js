const mongoose = require("mongoose");
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;
require('dotenv').config();

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

userSchema.plugin(mongooseFieldEncryption, {
    fields: ["name", "email"],
    secret: process.env.SECRET_KEY_MONGOOSE,
});

module.exports = mongoose.model("User", userSchema);