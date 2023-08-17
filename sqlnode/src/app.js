const express = require('express');
const { fetch1 } = require('./connect');

const app = express();
app.use(express.json())

app.get("/users", async (req, res) => {
    try {
        const users = await fetch1("select * from users");
        res.json(users);
        return;
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
});
app.get("/users/:id", async (req, res) => {
    try {
        const {id} = req.params
        const users = await fetch1("select * from users where id = $1",[id]);
        if (!users.length){
            res.status(404).send({message: 'User not found'});
            return
        }
        res.json(users);
    } catch (error) {
        res.status(404).send({message: 'User not found'});

    }
    
});

app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { usersname, email } = req.body;
        const users = await fetch1("UPDATE users SET usersname = $1, email = $2 WHERE id = $3 RETURNING *", [usersname, email, id]);
        res.send(users);
        return
    } catch (error) {
        res.status(404).send({message: 'User not found'});
    }
});

app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await fetch1("DELETE FROM users WHERE id = $1 ", [id]);
        res.send({message: "DELETET user"});
    } catch (error) {
        res.send({error: error.message});
    }finally{
        res.send({message: "USER NOT FOUND"});
    }
})

app.post("/users", async (req, res) => {
    try {
        const { id, usersname, email} = req.body;
        const users = await fetch1("insert into users(id, usersname, email) values($1, $2, $3) RETURNING *", [id, usersname, email]?[]: null);
        res.json(users);
        return;
    } catch (error) {
        res.status(404).send({message: 'User not found'});

    }
});



app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
