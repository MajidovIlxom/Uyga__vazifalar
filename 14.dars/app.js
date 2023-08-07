const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.set("view engine", "ejs"); 
app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.render("index"); 
});



let users = [];

io.on("connection", (socket) => {
    users.push({id: socket.id, name: `user ` + users.length}); 
    const currentUser = users.find((user) => user.id === socket.id)


    socket.on("all", ({message}) => {
        io.emit("response", { message, user: currentUser.name }); 
    });
    socket.on("me", ({message, to}) => {
        io.to(to).emit("response", { message, user: currentUser.name }); 
    });

    socket.emit("name", { name: currentUser.name });
    socket.emit("users", {users})

    socket.on("disconnect", function () {
        const index = users.findIndex((user) => user.id === socket.id);
        if (index !== -1) {
            users.splice(index, 1);
        }
    })
});

http.listen(4000, () => {
    console.log("Server is listening on port 4000");
});
