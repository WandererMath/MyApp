const express = require("express");
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./sample.db');

const app = express();
app.use(express.urlencoded({ extended: true }));

db.run('CREATE TABLE prices(name text, price integer)');

db.run(`INSERT INTO prices(name, price) VALUES(?, ?)`, ['Car', 1000], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
});