const util = require ("util");
const mysql = require ("mysql");

var inquirer = require("inquirer");


const connection = mysql.createConnection({
host:"localhost",
user: "root",
password:"root",
database:"Employee_Tracker"
})
connection.connect();
connection.query = util.promisify(connection.query)
module.exports = connection
