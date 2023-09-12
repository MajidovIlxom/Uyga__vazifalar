const { Schema, model } = require("mongoose");


const schema = new Schema(
    {
        imtihon_id:{
            type: Schema.Types.ObjectId,
            ref: "exams",
            required: true
        },
        user_id:{
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true
        },
        baxosi: {
            type: Number,
            required: true,
        },
        examsCreate_id: {
            type: Schema.Types.ObjectId,
            ref: "examsCreate"
        },
        status: {
            type: String, 
            default: "not submitted",
        }
    }
)

module.exports = model("evaluation", schema);
