
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./sample.db');




db.run(`INSERT INTO prices(name, price) VALUES(?, ?)`, ['Table', 100], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
});