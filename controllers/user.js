const User = require("../models/user");

exports.fetchUserData = async (req, res) => {
    try {
        let userData = await User.find();
        res.status(200).send(userData);
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
}

exports.storeUserData = async (req, res) => {
    try {
        let { email, name } = req.body;
        const userData = await User.create({ email, name })
        console.log("userData===>>", userData);
        res.send("user data saved")
    } catch (error) {
        console.log(error)
        res.send("Error")
    }
}