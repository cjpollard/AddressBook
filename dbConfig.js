const dbSettings = (process.env.NODE_ENV == "production") ? {
    "host": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DEFAULT
} : {
    "host": "localhost",
    "user": "cpab_user",
    "password": "bangarang",
    "database": "cp_address_book"
};

module.exports = {
    "database": dbSettings
};