const Io = require("../utils/io")
const User = require("../model/user.model")

const Users = new Io("./database/users.json")

const isAuth =async(ctx, next) =>{
    const users = await Users.read()

    const telegramId = ctx.from.id
    const findUser = users.find((user) => user.telegramId == telegramId)

    if(!findUser){
        const newUser = new User(ctx.from.first_name,telegramId)
        const data = users.length ? [...users, newUser] : [newUser]

        await Users.write(data)
    } else if(!findUser.status){
        findUser.status = true

        await Users.write(users)
    }
    next()
}

module.exports = isAuth;