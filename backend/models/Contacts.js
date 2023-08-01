const mongoose=require("mongoose");

const ContactsSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

const Contacts=new mongoose.model("contacts",ContactsSchema);
Contacts.createIndexes();
module.exports=Contacts;