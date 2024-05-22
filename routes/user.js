const { storeUserData, fetchUserData } = require("../controllers/user");

const router = require("express").Router();

module.exports = (app) => {
    router.get('/fetch', fetchUserData);
    router.post('/store', storeUserData);
    app.use('/user', router);
}