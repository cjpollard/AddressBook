const atob = require("atob");
const db = require("../utils/db");
const validate = require("../utils/validate").validate;

module.exports = (req, res) => {
    const schema = {
        "type": "object",
        "properties": {
            "firstname": {"type": "string", "minLength": 1},
            "surname": {"type": "string", "minLength": 1},
            "email": {"type": "string", "format": "email"},
            "houseNameNo": {"type": "string"},
            "street": {"type": "string"},
            "town": {"type": "string"},
            "county": {"type": "string"},
            "country": {"type": "string"},
            "postcode": {"type": "string"},
            "phone": {"type": "string", "maxLength": 15},
            "mobile": {"type": "string", "maxLength": 15},
            "dob": {"type": "string", "format": "date"}
        },
        "required": ["firstname", "surname", "email"]
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
        db.escape(body.surname),
        db.escape(body.email),
        db.escape(body.houseNameNo),
        db.escape(body.street),
        db.escape(body.town),
        db.escape(body.county),
        db.escape(body.country),
        db.escape(body.postcode),
        db.escape(body.phone),
        db.escape(body.mobile),
        body.dob
    ];

    db.query(`INSERT INTO contacts (firstname, surname, email, address1, address2, town, county, country, postcode, phone, mobile, dob)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`, insertValues)
        .then((result) => {
            return res.status(200).json({success: result});
        }, (error) => {
            return res.status(500).json({error: error});
        });

};