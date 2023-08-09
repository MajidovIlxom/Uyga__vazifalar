const {v4:uuid} = require("uuid")

class User {
    constructor(fristName, tegramId){
        this.id = uuid()
        this.fristName = fristName
        this.tegramId = tegramId
        this.status = true
    }
}

module.exports = User