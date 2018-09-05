const router = require("express").Router();

router.post("/add", require("./addContact"));
router.post("/delete", require("./deleteContact"));
router.post("/edit", require("./editContact"));
router.get("/get", require("./getContacts"));

module.exports = router;