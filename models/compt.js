const mongoose = require('mongoose');
const comptSchema = mongoose.Schema({
    
    name: {
        type : String,
        required : true
    },
    lastname:  {
        type : String,
        required : true
    },
    email:  {
        type : String,
        required : true
    },
    password :  {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required:true

    },
    birthday : {
        type:Date
    }
});
module.exports = mongoose.model('Compt', comptSchema)