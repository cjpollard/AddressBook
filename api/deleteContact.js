const atob = require("atob");
const db = require("../utils/db");
const validate = require("../utils/validate").validate;

module.exports = (req, res) => {
    const schema = {
        "type": "object",
        "properties": {
            "id": {"type": "number"},
        },
        "required": ["id"]
    };

    const data = typeof req.body.data === "string" ? req.body.data : "";
    let body;
    try {
        body = JSON.parse(atob(data));
    } catch(error) {
        return res.status(500).json({error: "Could not complete request"});
    }

    if(!validate(body, schema)) {
        return res.status(400).json({error: "Could not complete request"});
    }

    db.query(`DELETE FROM contacts WHERE id=?`, [body.id])
        .then((result) => {
            return res.status(200).json({success: result});
        }, (error) => {
            return res.status(500).json({error: error});
        });

};