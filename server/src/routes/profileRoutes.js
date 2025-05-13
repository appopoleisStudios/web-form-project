const express = require("express");
const { createProfile } = require("../controllers/profileController");
const apiKeyAuth = require("../middleware/auth");

const router = express.Router();

router.post("/profiles", apiKeyAuth, createProfile);

module.exports = router;
