const {Schema, model} = require("mongoose")

const schema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true
        },
        skills: {
            type: String,
            required: true,
            trim: true
        },
        Experience: {
            type: String,
            required: true,
            trim: true
        },
        Project: {
            type: String,
            required: true,
            trim: true
        },
        Education: {
            type: String,
            required: true,
            trim: true
        },
        Languages: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        timestamp: true,
    }
);

module.exports = model("resume", schema)

