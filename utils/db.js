const mysql = require("mysql");
const config = require("../dbConfig").database;

// Probably not necessary for a test app
config.connectionLimit = 10;
config.multipleStatements = true;

const pool = mysql.createPool(config);


let query = (sql, values) => {

    return new Promise((resolve, reject) => {
        // If passing an array of SQL queries, convert to a ; separated string
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

module.exports = {
    query: query
};