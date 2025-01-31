import {addTask, getTask} from './routes.js';
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
app.get('/read-tasks', getTask)

app.listen(5000, () => {
    console.log('Server started!')
})