import addTask from './routes.js';
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();

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


app.post('/addTask', addTask)

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