const productModel = require("../models/product.model")

const create = async(req, res) => {
    try {
        const {name, title, discription, price, category} =req.body;

        const data = await productModel.create({name, title, discription, price, category})

        res.json({message: data})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const find = async (req, res) => {
    try {
        const { page, limit, name, from, to, category } = req.query;
        const skip = (page - 1) * limit;
        let filter = {};

        if (name && category) {
            filter = {
                ...filter,
                $or: [{ name: name }, { category: category }],
            };
        }

        // Olib tashlash va filterga qo'shish
        if (from ) {
            filter.price = { $gte: parseInt(from) };
        }
        if (to) {
            filter.price = { ...filter.price, $lte: parseInt(to) };
        }

        const productCount = (await productModel.find(filter).countDocuments()) / limit;
        const product = await productModel.find(filter).skip(skip).limit(limit);

        res.status(200).json({ message: { product, productCount } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// const find = async(req, res) => {
//     try {
//         const {page, limit, name, from, to , category} = req.query;
//         const skip = (page - 1) * limit;
//         let  filter = {}

//         if (name && category){
//         filter = {
//                 ...filter,
//                 $or: [{name: name}, {category: category}],
//             }
//         }
//         if (productModel.price >=  from ){
//             filter.from = from
//         }
//         if (productModel.price <= to){
//             filter.to = to
//         }
//         const productCount = (await productModel.find(filter).countDocuments()) / limit;
//         const product = await productModel.find(filter).skip(skip).limit(limit);

//         res.status(200).json({message: {product, productCount} });
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// }
const findOne = async(req, res) => {
    try {
        const  { id} = req.params
        const data = await productModel.findOne({ id })

        res.json({message: data })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const update = async(req, res) => {
    try {
        const  {id} = req.params
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    create,
    findOne,
    find,
    update,
}