const express = require("express");
const sqlite3 = require('sqlite3').verbose();
const bodyParser  = require('body-parser');

let db = new sqlite3.Database('./sample.db');
var cors = require('cors')



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
function test(){
    let name="Car";
    db.all(`SELECT * from prices where name=?`,name, (err, rows)=>{
        console.log(rows[0].price);
    });
}

app.post("/price", (req,res)=>{
    try{
    let name=req.body.name;
    //console.log(name);
    db.all(`SELECT * from prices where name=?`,name, (err, rows)=>{
        try
        {res.send(rows[0].price.toString());}
        catch{}
        
    });
}
catch{}
})

app.get("/",(req, res)=>{
    res.send("GOOD");
})


app.listen(2345);