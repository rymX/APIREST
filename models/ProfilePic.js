const mongoose = require('mongoose');
const Compt=require('./compt');
const pictureSchema = mongoose.Schema({
    url : {type : String} ,
    owner:{
        type :  mongoose.Schema.Types.ObjectId ,
       ref : "Compt",
    }

});
module.exports = mongoose.model('ProfilePic', pictureSchema)