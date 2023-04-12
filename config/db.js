require("dotenv").config()
const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 20,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

function sqlQuery(sql, params) {
  console.log('sql:', sql)
  return new Promise(function (resolve, reject) {
    pool.query(sql, params, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  sqlQuery,
};