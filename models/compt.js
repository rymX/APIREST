const mongoose = require('mongoose');
const Profile= require('./profile');
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
        required : true,
       // unique : true
    },
    password :  {
        type : String,
        required : true
    },
   
    
   // experiences : [
     // {
      //   type :  mongoose.Schema.Types.ObjectId ,
      //     ref : "Profile"
      //}
    //]
});
module.exports = mongoose.model('Compt', comptSchema)