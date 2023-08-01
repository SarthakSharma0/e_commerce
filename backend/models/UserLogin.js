const mongoose=require("mongoose");

const UserLoginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const UserLogin=new mongoose.model("user",UserLoginSchema);
UserLogin.createIndexes();
module.exports=UserLogin;