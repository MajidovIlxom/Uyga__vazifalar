const {Schema, model} = require("mongoose")


const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        discription: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        }
    },{
        timestamps: true,
    }
)

module.exports = model("product", schema)