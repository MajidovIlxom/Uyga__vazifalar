const { Schema, model } = require("mongoose");


const schema = new Schema(
    {
        group_id: {
            type: Schema.Types.ObjectId,
            ref: "grouts",
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        imtixon_javob: {
            type: String,
            default: null,
        },      
    },
    {
        timestamps: true,
    }
)

module.exports = model("exams", schema);
