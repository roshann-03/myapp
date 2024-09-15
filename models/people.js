const mongoose = require("mongoose");
const peopoleSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

module.exports = mongoose.model('people', peopoleSchema);