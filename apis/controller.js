"use strict";
const router = require("express").Router();

router.post("/addContact", require("./addContact"));
router.post("/deleteContact", require("./deleteContact"));
router.post("/editContact", require("./editContact"));
router.get("/getContacts", require("./getContacts"));

module.exports = router;