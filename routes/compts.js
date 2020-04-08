const express = require('express');


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
 router.get('/',(req,res)=>{
   try{
     const compts= Compt.find();
     res.json(compts);
   }catch{
     res.json({message:err})
   }
 })


router.post('/',(req,res)=>{

    const compt = new Compt({
        name : req.body.name,
        lastname: req.body.lastname ,
        email : req.body.email,
        password : req.body.email,
        genre : req.body.genre,
        birthday: req.body.birthday
    });

    try{compt.save();
    res.json(compt);
    } catch {
      res.json({message : err})
    }


});



module.exports =router ;
