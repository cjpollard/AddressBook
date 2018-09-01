const atob = require("atob");
const db = require("../utils/db");
const validate = require("../utils/validate");

module.exports = (req, res) => {
    const schema = {
        "type": "object",
        "properties": {
            "firstname": {"type": "string", "minLength": 1},
            "lastname": {"type": "string", "minLength": 1},
            "email": {"type": "string", "format": "email"},
            "address": {
                "houseNameNo": {"type": "string"},
                "street": {"type": "string"},
                "town": {"type": "string"},
                "county": {"type": "string"},
                "country": {"type": "string"},
                "postcode": {"type": "string"},
            },
            "phone": {"type": "string", "maxLength": 15},
            "mobile": {"type": "string", "maxLength": 15},
            "dob": {"type": "string", "format": "date"}
        },
        "required": ["first_name", "last_name", "email_address"]
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

    const insertValues = [
        db.escape(body.firstname),
        db.escape(body.lastname),
        db.escape(body.email),
        db.escape(body.address.houseNameNo),
        db.escape(body.address.street),
        db.escape(body.address.town),
        db.escape(body.address.county),
        db.escape(body.address.town),
        db.escape(body.address.county),
        db.escape(body.address.country),
        db.escape(body.phone),
        db.escape(body.mobile),
        db.escape(body.dob)
    ];

    db.query(`INSERT INTO contacts (firstname, surname, email, address1, address2, town, county, country, postcode, phone, mobile, dob)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`, insertValues)
        .then((result) => {
            return res.status(200).json({success: result});
        }, (error) => {
            return res.status(500).json({error: error});
        });

};