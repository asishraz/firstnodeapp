var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
    name : {
        type: String,
    },
    phone: {
        type: String,
        unique: true
    },
    location: String    
    
});

module.exports = mongoose.model("User",userSchema);