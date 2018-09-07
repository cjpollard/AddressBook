const Ajv = require("ajv");

const validate = (data, schema) => {
    // Uses ajv to compare keys in objects, and checks values match expected types
    const ajv = new Ajv({coerceTypes: true});
    const validate = ajv.compile(schema);
    return validate(data);
};

module.exports = {
    validate
};