const express = require("express");
const author = require("../models/author");
const router = express.Router();
const {User, validateUser} = require("../models/users");

router.post("/",async (req,res)=>{
   const err = await validateUser(req.body);
   if(err.message)
    res.status(400).send(err.message);

   const user = new User({
        name:req.body.userName,
        author:{
            name:req.body.authorName,
            age:req.body.authorAge
        },
        genre:req.body.genre
    });
    user.save();
    res.json(user);
});


router.get("/",(req,res)=>{
    User.find()
    .then((users)=> res.send(users))
    .catch((err)=>res.send(err));
});

router.get("/:id",async (req,res)=>{
   const user = await User.findById(req.params.id);
   if(!user) 
   {res.send("fghj");}

   res.send(user);
  
});

router.put("/:id",async (req,res)=>{
    const update = await User.findByIdAndUpdate(req.params.id,{
        name :req.body.userName,
        author:{
            name:req.body.authorName,
            age :req.body.authorAge
        },
        genre:req.body.genre
    },{new:true});
    if(!update) 
    {res.send("fghj");}
 
    res.send(update);
});

router.delete("/:id",async (req,res)=>{
   const deletee = await User.findByIdAndRemove(req.params.id);
   if(!deletee) res.send("fghj");
   res.send(deletee);
});

module.exports = router;