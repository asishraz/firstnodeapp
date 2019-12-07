var mongoose = require("mongoose");

var bookingSchema = mongoose.Schema({
    userid : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    },
    machine: {
        type : mongoose.Schema.ObjectId,
        ref : "Machine"
    },
    mname: {
    	type: String
    },
    booking : String
    
});

module.exports = mongoose.model("Booking",bookingSchema);