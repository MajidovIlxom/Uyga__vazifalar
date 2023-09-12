const { Schema, model } = require("mongoose");


const schema = new Schema(
    {
        group_id: { 
            type: Schema.Types.ObjectId,
            ref: "grouts",
            trim: true,
            required: true
        },
        exam_file: {
            type: String,
            required: true,
        },
        deadline: {
            type: Date, // Agar san'atliqtirgan vaqt o'zgaruvchanini saqlashni xohlaysiz
        },
    },{
        timestamps: true,
    }
)

module.exports = model("examsCreate", schema);
