const Ajv = require("ajv");

const validate = (data, schema) => {
    const ajv = new Ajv({coerceTypes: true});
    const validate = ajv.compile(schema);
    return validate(data);
};

module.exports = {
    validate
};