const mysql = require("mysql");

const pool = mysql.createPool({
    host: "localhost",
    user: "cpab_user",
    password: "bangarang",
    database: "cp_address_book",
    connectionLimit: 10,
    multipleStatements: true
});


const query = (sql, values) => {

    return new Promise((resolve, reject) => {
        if (typeof sql !== "string") {
            sql = sql.join(";") + ";";
        }

        if(typeof values === "undefined") {
            values = [];
        }
        pool.getConnection((err, connection) => {
            if (err) return reject(err);
            connection.query(sql, values, (err, results) => {
                connection.release();
                if (err) return reject(err);
                return resolve(results);
            });
        });
    });
};


const escape = (str) => {
    return mysql.escape(str);
};

module.exports = {
    pool: pool,
    query: query,
    escape: escape,
};