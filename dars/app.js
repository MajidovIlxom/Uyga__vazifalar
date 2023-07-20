const http = require('http');
const bodyParser = require('./utils/bodyParser');
const Io = require('./utils/lo.js')
const Users = new Io("./databas/users.json")
const Person = require("./model/person")

const server = http.createServer(async(req, res) => 
{
    if (req.url ==="/auth/login" && req.method === "POST" )
    {
        req.body = await bodyParser(req)
        const { username, password} = req.body
        const users = await Users.read();
        const findUser = users.find((user) => user.username === username);
        const findPass = users.find((user) => user.password === password);
        if (findUser && findPass) 
        {
            res.writeHead(201,{'Content-type':'application/json'})
            res.end(JSON.stringify({message:"Kirildi"}))        
        }
        else
        {
            res.writeHead(201,{'Content-type':'application/json'})
            res.end(JSON.stringify({message:"Username yoki parol noto'g'ri"}))        
        }
    }

    else if (req.url ==="/auth/register" && req.method === "POST" )
    {
        req.body = await bodyParser(req)
        const { username, password} = req.body



        const users = await Users.read()

        const findUser = users.find((user) => user.username === username)

        if (findUser)
        {
            res.writeHead(403, {"Content-Type": "application/json"});

            return res.end(JSON.stringify({message: "Username allaqachon kiriting "}))
        }

        const id = (users[users.length - 1]?.id || 0) + 1

        const person = new Person(id, username, password)

        const result = users.length ? [...users, person] : [person]

        await Users.write(result)

                

        res.writeHead(201, {"Content-Type": "application/json"});

        res.statusCode = 201
        res.end(JSON.stringify({message: "Muvaffaqiyatli"}))
    }
})

server.listen(3000, "localhost", ()=> 
{
    console.log(3000);
});






































































































// const bodyPerson = (req) => {    
//     return new Promise((resolve, reject) => 
//     {
//         try {
//             req.on('data', (data) => {
//                 resolve(JSON.parse(data));
//             })
//         } catch (error) {
//             reject(error);
//         }
//     })
// }
// http.createServer(async (req, res) => {
//     res.setHeader('Content-Type', 'application/json')
//     // res.setHeader('Content-Type', 'text/html')
//     if (req.method === 'GET' && req.url === "/users") 
//     {
//         res.statusCode = 400 
//         // res.end(JSON.stringify(users))
//         res.end("<h1>Salom Najim nima gap</h1>")
//     } else if (req.method === 'POST' && req.url === "/users") {
//         req.body = await bodyPerson(res)
//         console.log(req.body);
//     } 
//     else {
//         console.log("404 not defined");
//     }
// })
// .listen(4000,"localhost",() => {
//     console.log("server ishlayabdi");
// })


