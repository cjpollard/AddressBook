const mysql = require("mysql");
const config = require("../dbConfig").database;

config.connectionLimit = 10;
config.multipleStatements = true;
const pool = mysql.createPool(config);


let query = (sql, values) => {

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


let escape = (str) => {
    return mysql.escape(str);
};

module.exports = {
    pool: pool,
    query: query,
    escape: escape,
};