import {addTask, getTask, updateTask, deleteTask, completeTask} from './routes.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/addTask', addTask)
app.get('/read-tasks', getTask)
app.post('/update-task', updateTask)
app.post('/delete-task', deleteTask)
app.post('/complete-task', completeTask)

app.listen(5000, () => {
    console.log('Server started on PORT 5000!')
})