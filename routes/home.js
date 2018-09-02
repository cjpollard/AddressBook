"use strict";

const router = require("express").Router();

router.get("/", (req, res) => {
    let templateSettings = req.templateSettings;
    templateSettings.cssPage = "homepage";

    res.render("main", templateSettings);

});

module.exports = router;