const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');

router.post('/createUser',[
    body('email').isEmail()
],async (req,res)=>{
    const {name,email,password} = req.body;
    console.log(email)

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        const chk = await User.findOne({email:email});
        if(chk){
            return res.status(400).json({"Error":"Already registered"});    
        }
        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json(user.email)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/loginUser',[
    body('email').isEmail()
],async (req,res)=>{
    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user){
            success = false
            return res.status(400).json({error: "Please try to login with correct credentials"});
        }

        if(!(user.password===password)){
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        success = true;
        x=user.name
        res.json({success,x})

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.post('/getUser', async (req, res) => {

    try {
      const userId = req.email;
      const user = await User.findOne({userId})
      res.send(user)

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
})


module.exports = router