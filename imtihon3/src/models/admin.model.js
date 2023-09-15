const { Schema, model } = require("mongoose");


const schema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        isAdmin: {
          type: Boolean,
          default: false,
        },
    }
)

module.exports = model("admins", schema);
