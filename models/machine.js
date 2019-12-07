var mongoose = require("mongoose");

var machineSchema = mongoose.Schema({
    mname : {
        type: String
    },
    mtype: {
        type: String
    },
    mowner: {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    },

    mprice: String,
    mdate : String
    
});

module.exports = mongoose.model("Machine", machineSchema);
