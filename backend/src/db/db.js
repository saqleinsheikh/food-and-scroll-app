const mongoose = require('mongoose')


function connectDB(){
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("mongoDB connected");
    })
    .catch((err)=>{
        console.log("mongoDb connection error",err);
    })
}

module.exports= connectDB