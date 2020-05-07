const mongoose= require('mongoose') ;
const Compt=require('./compt');
const profileSchema = mongoose.Schema({
    title:{
        type: String ,
        required : true
    } ,
    company:{
        type: String ,
        required : true
    },
    startDate :{type: Date} ,
    endDate :{ type : Date},
    description:{
        type: String ,
        required : true
    } ,
    owner:{
        type :  mongoose.Schema.Types.ObjectId ,
       ref : "Compt",
    }
});
module.exports= mongoose.model('Profile',profileSchema)
