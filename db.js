const mongoose = require('mongoose')
require('dotenv').config()

const MongoDB_URL = process.env.MongoDB_URL

function connectToMongoDB (){
  mongoose.connect(MongoDB_URL)
}

mongoose.connection.on("connected", () =>{
  console.log("mongodb connected successfully")
});

mongoose.connection.on('error', (err) =>{
  console.log('error connecting to mongodb', err);})

  module.exports = {connectToMongoDB};