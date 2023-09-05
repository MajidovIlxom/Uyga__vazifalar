const {Schema, model} = require("mongoose")

const schema = new Schema(
    {
        Company: {
            type: String,
            required: true,
            trim: true
        },
        job_name: {
            type: String,
            required: true,
            trim: true
        },
        skills: {
            type: String,
            required: true,
            trim: true
        },
        It_important_to_us: {
            type: String,
            required: true,
            trim: true
        },
        Resumes: {
            type: Schema.Types.ObjectId,    
            ref: "users",
            required: true
        }
    },
    {
        timestamp: true,
    }
);

module.exports = model("company", schema)

