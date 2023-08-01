const connectToMongo = require('./db');
const express = require("express");
var cors = require('cors')
connectToMongo();

const app = express()
const port = process.env.PORT || 5000

app.use(cors({
    origin:'https://e-commerce-ashen-five.vercel.app'
}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("<h1>Backend Up!!<h1>")
})
app.use('/api/auth',require('./routes/auth'))
app.use('/api/items',require('./routes/items'))
app.use('/api/contact',require('./routes/contact'))


app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})