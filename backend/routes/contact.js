const express = require('express');
const Contacts = require('../models/Contacts');
const router = express.Router();
const {body, validationResult} = require('express-validator');

router.post('/createContact',[
    body('email').isEmail()
],async (req,res)=>{
    const {email,name,message} = req.body;
    console.log(email)
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
        let contacts = await Contacts.create({
            email: req.body.email,
            name: req.body.name,
            message: req.body.message,
        });
        res.json(contacts.email)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router