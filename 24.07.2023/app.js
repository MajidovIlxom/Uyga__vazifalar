const  express = require('express');
const Io = require('./utils/io')
const Todo = require("./models/Todo")
const Todos = new Io("./daatbase/todos.json")

const  app = express();
app.use(express.json());


app.post('/qwe', async(req,res)=>{
    const {title, description} = req.body
    
    
    if(!title || !description){
        return res.status(400).json({message: 'Title and description are required'})
    }   

    const todos = await Todos.read()
    
    const id = (todos[todos.length - 1]?.id || 0)+ 1

    const newtodo = new Todo(id, title, description)

    const data = todos.length ?[...todos, newtodo] : [newtodo]
    await Todos.write(data)
    res.status(201).json({message: 'Hammasi chotki'})
})

app.get('/a', async (req, res) =>{
    const todos = await Todos.read()

    res.json({todos})
})
app.get("/s/:id", async (req, res) =>{
    const {id} = req.params
    const {title,description} = req.body
    const todos = await Todos.read()
    const count1  = todos.length
    const findtodo = todos.find((todo)=> todo.id == id)
    if (!findtodo){
        return res.status(404).json({message: 'Todo topilmadi'})
    }
    res.json({findtodo, count1})
})

app.put("/p/:id", async (req, res) =>{
    const {id} = req.params
    console.log(id);
    const {title,description} = req.body

    const todos = await Todos.read()
    const findtodo = todos.find((todo)=> todo.id == id)
    if (!findtodo){
        return res.status(404).json({message: 'Todo topilmadi'})
    }
    findtodo.title = title ? title : findtodo.title
    findtodo.description = description ? description : findtodo.description
    await Todos.write(todos)
    res.json({message: "Muvaffaqiyatli yozildi"})
})
app.delete('/d/:id', async (req, res) =>{
    const {id} = req.params
    const todos = await Todos.read()

    const findtodo = todos.find((todo)=> todo.id == id)

    if (!findtodo){
        return res.status(404).json({message: 'Todo topilmadi'})
    }

    const filtertodo = todos.filter((todo)=> todo.id != id)
    
    await Todos.write(filtertodo)

    res.json({message: "Muvaffaqiyatli yozildi"})

    
})
app.listen(3000,()=>
{
    console.log('Server is running on port 3000');
});