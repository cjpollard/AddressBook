const dbSettings = (process.env.NODE_ENV == "production") ? {
    "host": "185.216.77.171",
    "user": "cpad_user",
    "password": "c5v36a7ajf4guhx6",
    "database": "cp_address_book"
} : {
    "host": "localhost",
    "user": "root",
    "password": "bangarang",
    "database": "cp_address_book"
};

module.exports = {
    "database": dbSettings
};