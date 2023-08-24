const { fetch, fetchOne } = require("../utils/pg")

const productCreate = async(req, res) => {
    try {
        const {name, kg, price, category_id} = req.body

        const data = await fetchOne('insert into products(name,kg, price,category_id) values($1,$2 ,$3, $4) returning*',
        name, 
        kg, 
        price, 
        category_id)
        
        res.status(200).json({message: data})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deletpro = async(req, res) => {
    await fetchOne('delete from products')
    res.status(200).json({message: 'success'})
} 

const productGetAll = async(req, res) => {
    try {
        const data = await fetch('select * from products')

        res.status(200).json({data: data})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {productCreate, productGetAll,deletpro }

