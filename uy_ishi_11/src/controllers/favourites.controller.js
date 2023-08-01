const Io = require('../utils/Io')
const Favourites = new Io("./database/favourites.json")
const favourites = require("../models/cart.model");


const createfavourites = async(req, res) => {
    try {
        const userId = req.user.id
        const {product} = req.body
        const catts = await Favourites.read()
        
        const cart = new favourites(product, userId)

        const data = catts.length ? [...catts, cart] : [cart]
        await Favourites.write(data)
        res.status(200).json({message: "Cart created successfully"});
    } catch (error) {
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
        
    }
}
const getfavourites = async(req, res) => {
    try {
        const catts = await Favourites.read()

        res.json({message:  catts});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    }
}
const deletefavourites = async(req, res) => {
    const cart = await Favourites.read();
    const {id} = req.params;

    const filter = cart.filter((product) => product.id1_produkt != id);

    await Favourites.write(filter);

    res.json({message: "Deleted"});
}


module.exports = {
    createfavourites,
    getfavourites,
    deletefavourites
}