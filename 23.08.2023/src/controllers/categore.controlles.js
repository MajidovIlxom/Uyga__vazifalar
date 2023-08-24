const { fetch, fetchOne } = require("../utils/pg")



const categoreCreate = async(req, res) => {
    try {
        const {name} = req.body

        const data = await fetch('insert into categores(name) values ($1)returning*',name)

        res.status(200).json({data: data});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const categoreGetAll = async(req, res) => {
    try {
        const data = await fetchOne('select * from categores');
        res.status(200).json({data: data});
    } catch (error) {
        res.status(500).json({error: error})
    }
}

module.exports = {categoreCreate,categoreGetAll }