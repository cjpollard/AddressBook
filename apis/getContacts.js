const db = require("../utils/database");

module.exports = (req, res) => {

    db.query(`SELECT * FROM contacts`)
        .then((result) => {
            return res.status(200).json({contacts: result});
        }, (error) => {
            return res.status(500).json({error: error});
        });

};