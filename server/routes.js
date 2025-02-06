import mysql from 'mysql2';

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'merntodo'
});

db.connect((err) => {
    if(!err){
        console.log("Database is connected");
    }
    else{
        console.log(err);   
    }
});

export const getTask = (req, res) => {
    const q = 'SELECT * from merntodo';
    db.query(q, (err, result) => {
        if(err){
            console.log("failed to read tasks")
        }else{
            console.log("read tasks successfully")
            res.send(result)
        }
    })
}

export const addTask = (req,res) => {
    console.log(req.body);
    const q = 'insert into merntodo (task, createdAt, status) values (?, ?, ?)';
    db.query(q, [req.body.task, new Date(), "Active"], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log('To do saved');
            const updatedTasks = 'SELECT * FROM merntodo';
            db.query(updatedTasks, (error, newList) => {
                res.send(newList)
            })
        }
    });
};

export const updateTask = (req, res) => {
    console.log(req.body);
    const q = 'UPDATE merntodo SET task = ? WHERE id = ?';
    db.query(q, [req.body.task, req.body.updatedId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error updating task.");
        } else {
            console.log("Updated the task");
            const updatedTasks = 'SELECT * FROM merntodo';
            db.query(updatedTasks, (error, updatedResult) => {
                if (error) {
                    console.log(error);
                    return res.status(500).send("Error retrieving tasks.");
                } else {
                    res.send(updatedResult);
                }
            });
        }
    });
};

export const deleteTask = (req, res) => {
    console.log(req.body);
    const q = 'DELETE FROM merntodo WHERE id = ?';
    db.query(q, [req.body.id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log("Task Deleted");
            const updatedTasks = 'SELECT * FROM merntodo';
            db.query(updatedTasks, (error, updatedResult) => {
                if (error) {
                    console.log(error);
                    return res.status(500).send("Error retrieving tasks.");
                } else {
                    res.send(updatedResult);
                }
            });
        }
    })
}