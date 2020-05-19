const express = require('express');
const router= express.Router();

const multer =require('multer') ;
/* const fileFilter = (req , file , cb ) => {
  if( file.type === 'image/png'){
    cd(null, true);
  }
  else {
    cb(null , false);
  }
};
*/
const storage = multer.diskStorage({
destination : function(req , file ,cb){
  cb(null , './uploads');
},
filename : function(req , file , cb){
cb(null , new Date().toDateString() + file.originalname ); 
}
});

const upload = multer({storage : storage });



const ProfilePic = require('../models/ProfilePic');

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
  localhost:8081/api/companies
 // get all the compts

 router.get('/', async (req,res)=>{
   try{
     const compts= await Compt.find();
     res.json(compts);
   }catch(err){
     res.json({message:err})
     console.log(err)
   }
 })
 /=*/

const status="" , user={}

router.post('/', async (req,res)=>{

    const compt =  new Compt({
        name : req.body.name,
        lastname: req.body.lastname ,
        email : req.body.email,
        password : req.body.password,
    });
    

    const Picture = new ProfilePic({
      url :"uploads/Thu May 14 2020undraw_female_avatar_w3jk.png" ,
      owner : compt._id
    });

   

    try{ await compt.save();
      Picture.save();
     
    res.json(compt);
    res.json(compt2);
    } catch(err) {
      res.json({message : err})
    }


});
// get a specific user

router.get('/name/:name/password/:password', async (req,res)=>{
  try{
    const compts= await Compt.find({name:req.params.name , password: req.params.password})
    res.json(compts)

        //  actualuser = compts ;
   if (compts.length)

  {
     this.status="logged-in"
    this.user=compts


  }
  else {
    this.status="not-logged-in"

  }


  }catch(err){
    res.json({message:err})
    console.log(err)
  }

})



router.get('/isLogged' , (req , res)=> {
  req.session.status = this.status
  req.session.user = this.user

 res.send(req.session)

})
router.post('/logout' , (req,res)=>{

this.status="not-logged-in"
this.user ={}
})

router.post('/profilepicture' , upload.single('avatar') , async (req,res) => {
  console.log(req.file);
  console.log(req.body);
 const Picture = new ProfilePic({
    url :req.file.path ,
    owner : req.body.user

  })

  try{ await Picture.save();

    res.json(Picture);
    } catch(err) {
      res.json({message : err})
    }
} )
router.get('/profilepicture/owner/:owner' , async(req,res) =>{
try{
  const  Picture = await ProfilePic.find({owner : req.params.owner})
  res.json(Picture);
}
  catch(err){
    res.json(err);
  }

})
router.patch('/profilepicture' , upload.single('avatar') , async (req,res) => {
  console.log(req.file);
  console.log(req.body);
  try{  
 const Picture = await  ProfilePic.updateOne (
   {owner : req.body.user} ,
   {$set: {url :req.file.path}}
   )
   const  modifiedPicture = await ProfilePic.find({owner : req.body.user})

    res.json(modifiedPicture);
    } catch(err) {
      res.json({message : err})
    }
} )



module.exports =router ;
