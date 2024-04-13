const express = require("express");
const { registerUser } = require("../controllers/usercontroller");

const router = express.Router();

router.route("./").post(registerUser);
// router.post("./login", authUser);

module.exports = router;
