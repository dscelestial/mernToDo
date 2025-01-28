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
    const q = 'insert into merntodo (task, createdAt) values (?, ?)';
    db.query(q, [req.body.task, new Date()], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('To do saved');
        }
    });
    
})

app.get('/read-tasks', (req, res) => {
    const q = 'SELECT * from merntodo';
    db.query(q, (err, result) => {
        if(err){
            console.log("failed to read tasks")
        }else{
            console.log("read tasks successfully")
            res.send(result)
        }
    })
})

app.listen(5000, () => {
    console.log('Server started!')
})