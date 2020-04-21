const express =require('express');
const mongoose =require('mongoose');
const cors =require('cors');


const app=express();
app.listen(3001);
app.use(cors())


const bodyParser = require('body-parser');
app.use(bodyParser.json());





mongoose.connect('mongodb://localhost:27017/apirestdb',
{ useNewUrlParser: true ,  useUnifiedTopology: true},
()=> console.log('connect to db '));







const comptesroute = require('./routes/compts');
app.use('/compts', comptesroute);


const profileroute = require('./routes/profiles');
app.use('/profiles', profileroute);

