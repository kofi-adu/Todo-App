const mongoose = require('mongoose');

// create database schema
const todoSchema = new mongoose.Schema({
    listItem : {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Todo',todoSchema);
