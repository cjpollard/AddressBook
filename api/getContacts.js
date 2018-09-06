const db = require("../utils/db");

module.exports = (req, res) => {

    db.query(`SELECT * FROM contacts ORDER BY surname`)
        .then((result) => {
            return res.status(200).json({contacts: result});
        }, (error) => {
            return res.status(500).json({error: error});
        });

};