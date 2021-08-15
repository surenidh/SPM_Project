const  express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://sureni:sureni321@cluster0.aianx.mongodb.net/counselling?retryWrites=true&w=majority',{
useNewUrlParser: true,
} ,() => console.log("database connected"));

app.listen(3001 , () => console.log("Server is started"));;