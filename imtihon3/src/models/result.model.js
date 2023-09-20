const { Schema, model } = require("mongoose");
const schema = new Schema(
    {
        imtihon_id: {
            type: Schema.Types.ObjectId,
            ref: "exams",
        },
        evaluation_id: {
            type: Schema.Types.ObjectId,
            ref: "evaluation",
        },
        examsCreate_id: {
            type: Schema.Types.ObjectId,
            ref: "examsCreate",
        }
    },{
        timestamps: true,
    }
)

module.exports = model("result", schema)