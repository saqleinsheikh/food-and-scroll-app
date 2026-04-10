// create server
const express = require('express')
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const foodRoutes = require("./routes/food.route")


const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use('/api/auth',authRoutes);
app.use('/api/food', foodRoutes);



module.exports = app ;