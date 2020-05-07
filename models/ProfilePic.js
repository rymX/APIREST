const mongoose = require('mongoose');
const pictureSchema = mongoose.Schema({
    url : {type : String}
});
module.exports = mongoose.model('ProfilePic', pictureSchema)