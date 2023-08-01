const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sarthaksharma0807:6NoyXWYqN0YQJsXK@cluster0.uusb40w.mongodb.net/ecomdatabase'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo ");
    })
}

module.exports = connectToMongo