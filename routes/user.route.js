const express = require("express");
const { getUser, postUser } = require("../controllers/user.controller");
const router = express.Router();


router.get("/users",getUser)
router.post("/users", postUser)

module.exports = router;