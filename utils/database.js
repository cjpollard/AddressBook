const mysql = require("mysql");
const config = require("../appConfig").database;

config.connectionLimit = 5;
config.multipleStatements = true;

const pool = mysql.createPool(config);


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