const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'merntodo'
})

db.connect((err) => {
    if(!err){
        console.log("Connected to database successfully");
    }
    else{
        console.log(err);
    }
})


app.post('/addTask', (req,res) => {
    console.log(req.body);
})

app.listen(5000, () => {
    console.log('Server started!')
})