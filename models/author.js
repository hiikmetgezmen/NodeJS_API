const mongoose = require("mongoose");

const AuthorSchemna = new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        minlength:1,
        maxlength:20
    },
    age:
    {
        type:Number,
        min:1,
        max:95
    }
});

module.exports = new mongoose.model("Author",AuthorSchemna);