const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Grouts = model("grouts", schema);

module.exports = Grouts;
