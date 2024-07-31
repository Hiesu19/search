const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    author: { type: String },
    img: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
