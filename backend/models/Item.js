const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema({
    itemCategory:{
        type: String,
        required: true
    },
    itemName:{
        type: String,
        required: true 
    },
    itemPrice:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

const Item=new mongoose.model("item",ItemsSchema);
Item.createIndexes();
module.exports=Item;