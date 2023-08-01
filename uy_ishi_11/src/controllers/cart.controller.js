const Io = require("../utils/Io");
const Carts = new Io("./database/cart.json")
const Cart = require("../models/cart.model");

const createCart = async(req,res)=>{
    try {
        const userId = req.user.id
        const {product} = req.body
        const catts = await Carts.read()
        
        const cart = new Cart(product, userId)

        const data = catts.length ? [...catts, cart] : [cart]
        await Carts.write(data)
        res.status(200).json({message: "Cart created successfully"});
    } catch (error) {
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
        
    }
}
const getCart = async(req, res)=>{
    try {
        const catts = await Carts.read()

        res.json({message:  catts});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    }
}


const deleteCart = async(req, res)=>{
    const cart = await Carts.read();
    const {id} = req.params;

    const filter = cart.filter((product) => product.id1_produkt != id);

    await Carts.write(filter);

    res.json({message: "Deleted"});
}


module.exports = {
    createCart,
    getCart,
    deleteCart

}

