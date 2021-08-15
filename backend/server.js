import express from  'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://sureni:sureni321@cluster0.aianx.mongodb.net/counselling?retryWrites=true&w=majority', () => console.log("database connected"));

app.listen(3001 , () => console.log("Server is started"));