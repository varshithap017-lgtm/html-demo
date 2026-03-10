const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://swasthik126_db_user:wOKe7LOCdxXnYhzf@instagram.xnjjk94.mongodb.net/parking"

const mongodbconnection = async()=>{
    try{
        const conn = await mongoose.connect(mongoURL);
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("Error in MongoDB connection", err);
    }
}

module.exports = mongodbconnection;
