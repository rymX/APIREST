const express =require('express');
const mongoose =require('mongoose');
const cors =require('cors');


const app=express();
app.use(cors())


const bodyParser = require('body-parser');
app.use(bodyParser.json());





mongoose.connect('mongodb://localhost:27017/apirestdb',
{ useNewUrlParser: true ,  useUnifiedTopology: true},
()=> console.log('connect to db '));







const comptesroute = require('./routes/compts');
app.listen(3000);
app.use('/compts', comptesroute);
