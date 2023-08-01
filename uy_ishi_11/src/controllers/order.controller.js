const Joi = require("joi");

const Io = require("../utils/Io")
const Orders = new Io("./database/orders.json")
const orders = require("../models/order.model")

const Products = new Io("./database/products.json")


const postorder = async(req, res) => {
    const useId = req.user.id
    const {producId, count, address} = req.body

    const schema = Joi.object({
        producId: Joi.string().required(),
        count: Joi.number().required(),
        address: Joi.string().required()
    })


    const {error} = schema.validate({producId, count, address})
    if(error) return res.status(400).json({message: error.message})
    const product = await Products.read()
    const findProducts = product.find((p) => p.id == producId)
    console.log(findProducts);
    if(!findProducts || findProducts.count < count) return res.status(400).json({message: "Invalid product"})
    const ordrs = await Orders.read()
    const price = findProducts.sell
    const hammasi = count * price
    const neworder = new orders(useId, producId, address, +count, price, hammasi) 
    const data = ordrs.length ? [...ordrs, neworder] : [neworder]
    await Orders.write(data)
    findProducts.count -= count
    await Products.write(product)
    res.json({message: "Order placed"})
}



const getorder = async(req, res) => {
    const orders = await Orders.read()
    res.json({orders:orders})
}


const getOrderProfit = async(req,res)=> {
    let profits = 0
    const orders = await Orders.read()
    for (let i = 0; i < orders.length; i++) {
        profits+=orders.profit
    }
    res.json({message: `Sizning sof foydangiz -- ${profits}`})
}

module.exports = {
    postorder,
    getorder,
    getOrderProfit
}