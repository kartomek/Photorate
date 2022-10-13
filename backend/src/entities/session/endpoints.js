const express = require("express");
const { login, checkToken } = require("./controller.js");
const authenticate = require("../../middlewares/authenticate.js");

const router = express.Router();

router.post(
    "/login",
    login
);

router.get(
    "/check_token",
    authenticate,
    checkToken
);

module.exports = router;