const express =require('express');
const mongoose =require('mongoose');
const cors =require('cors');
const session =require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


const app=express();


app.use(cors())



app.use(bodyParser.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));





mongoose.connect('mongodb://localhost:27017/apirestdb',
{ useNewUrlParser: true ,  useUnifiedTopology: true},
()=> console.log('connect to db '));
const comptesroute = require('./routes/compts');
const profileroute = require('./routes/profiles');

app.use(session({
    name :'sid',
    secret: "qgvlujbkjh86532kjgf" ,
    resave: true,
    saveUninitialized: true,
    
   
    /*cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true,
        secure: process.env.NODE_ENV === 'production'

    } */ 


}))
app.listen(3001);





app.use('/compts', comptesroute);



app.use('/profiles', profileroute);


app.get('/home', function(req,res){
    app.render('home');
})
