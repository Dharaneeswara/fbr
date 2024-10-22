// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app=express();
// app.use(cors());
// app.use(express.json());

// const db= mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"signup"
// })

// app.post('/signup',(req,res) =>{
//     const sql="INSERT INTO login (`name`,`email`,`password`) Values (?)";
//     const values=[
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     db.query(sql, [values], (err, data) =>{
//         if(err){
//             return res.json("Error");
//         }
//         return res.json(data);
//     })
// })
// app.post('/login',(req,res) =>{
//     const sql="SELECT * FROM login WHERE `email`=? AND `password`=?";
//     db.query(sql, [req.body.email, req.body.password], (err, data) =>{
//         if(err){
//             return res.json("Error");
//         }
//         else if(data.length >0){
//             return res.json("Success");
//         }else{
//             return res.json("Faile");
//         }
//     })
// })

// app.listen(8081,()=>{
//     console.log("listening");
    
// })

// Combined Server File
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// First Database Connection (for signup/login)
const dbLogin = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

// Second Database Connection (for datatable)
const dbData = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "datapage"
});

// Handling Signup
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    dbLogin.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

// Handling Login
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email`=? AND `password`=?";
    dbLogin.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        } else if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});

// Prevent Favicon Request Error
app.get('/favicon.ico', (req, res) => {
    res.status(204);
    res.end();
});

// Handling Data Table Requests
app.get('/datatable', (req, res) => {
    const sql = "SELECT * FROM datatable";
    dbData.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// Start the server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
