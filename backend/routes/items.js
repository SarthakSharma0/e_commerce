const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const { body, validationResult } = require('express-validator');

router.post('/fetchallItems', async (req, res) => {
    try {
        const{email} = req.body;
        const items = await Item.find({ email: email })
        res.json(items)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/addItem', async (req, res) => {
        try {
            const { itemCategory, itemName, itemPrice, email} = req.body;
            if(email==="admin@gmail.com"){
                return res.status(474).json({"Error":"Please Log In"});
            }
            const chk = await Item.findOne({itemCategory,itemName,itemPrice,email});
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            if (chk) {
                return res.status(475).json({"Error":"Already in cart"});
            }
            else{

                const item = new Item({
                    itemCategory, itemName, itemPrice, email
                })
                const savedItem = await item.save()
                
                res.json(savedItem)
            }

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

router.delete('/deleteItem', async (req, res) => {
    try {
        const { itemCategory, itemName, itemPrice, email } = req.body;
        let item = await Item.find({itemCategory,itemName,itemPrice,email});
        if (!item) { return res.status(404).send("Not Found") }

        item = await Item.deleteMany({itemCategory,itemName,itemPrice,email})
        res.json({ "Success": "Item has been deleted", Item: item });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router