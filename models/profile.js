const mongoose= require('mongoose') ;
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
    }
});
module.exports= mongoose.model('profile',profileSchema)
