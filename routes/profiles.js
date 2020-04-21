const express = require('express');
const router= express.Router();


const Profile = require('../models/profile')

router.post('/',async(req,res)=>{
  const  profile = new Profile({
        title:req.body.title,
        company:req.body.company,
        startDate:req.body.startDate,
        endDate:req.body.endDate,
        description:req.body.description
    });
    try{ await profile.save();
        res.json(profile)
    }
    catch(err){
      res.json(err)
    }
});

router.get('/', async(req,res)=>{
    try{ const profiles = await Profile.find();
    res.json(profiles);}
    catch(err){
      res.json(err)
    }
});

module.exports = router;