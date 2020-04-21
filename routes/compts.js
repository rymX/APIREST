const express = require('express');
const mongoose = require('mongoose');

const router= express.Router();

const Compt = require('../models/compt');

/*
router.get('/:comptid',(req,res)=>{
  const compt = Compt.findById(req.param.comptid);
  res.json(compt);
})
*/

/*
router.get('/:comptid',(req,res)=>{
  try{
    const compt= Compt.findById(req.param.comptid);
    res.json(compt);

  }
  catch{
    res.json({message : err})
  }
  })
  */
 // get all the compts
 /*
 router.get('/', async (req,res)=>{
   try{
     const compts= await Compt.find();
     res.json(compts);
   }catch(err){
     res.json({message:err})
     console.log(err)
   }
 })
 */ 


router.post('/', async (req,res)=>{

    const compt =  new Compt({
        name : req.body.name,
        lastname: req.body.lastname ,
        email : req.body.email,
        password : req.body.password,
        genre : req.body.genre,
        birthday: req.body.birthday
    });

    try{ await compt.save();
    res.json(compt);
    } catch(err) {
      res.json({message : err})
    }


});
// get a specific compt
router.get('/name/:name/password/:password', async (req,res)=>{
  try{
    const compts= await Compt.find({name:req.params.name , password: req.params.password})
    res.json(compts);
  }catch(err){
    res.json({message:err})
    console.log(err)
  }
 
})
router.get('/',(req,res)=>{
  res.send('hello');
});


module.exports =router ;
