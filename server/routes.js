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