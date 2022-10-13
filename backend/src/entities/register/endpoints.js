const express = require("express");
const { register } = require("./controller.js");
const { login } = require("../session/controller.js");
const {validationRegister, checkSamePassword} = require("./validation.js");
const {validation} = require("../../middlewares/validation.js");


const router = express.Router();

router.post(
    "/",
    validationRegister,
    validation,
    checkSamePassword,
    register,
    login
);

module.exports = router;

