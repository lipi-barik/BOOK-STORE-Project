const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Book =require('./model/book');
const bookRoutes =require('./routes/rbook');

app.use(express.json());

app.use("/api/v1/books",bookRoutes);



mongoose.connect('mongodb://127.0.0.1:27017/book')
  .then(() => console.log("connected!"));

app.listen(5000,()=>{
    console.log("server is running at 5000")
}) 