const  express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./DB.js');

const app = express();
const uploadPostRoutes = require('./router/uploadPost.route.js');

mongoose.Promise = global.Promise;

//connect to database

mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology: true}).then(
    () => {console.log('Database is now conneted')},
    err => {console.log('cannot connect to database' + err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/uploadposts',uploadPostRoutes);




//mongoose.connect('mongodb+srv://sureni:sureni321@cluster0.aianx.mongodb.net/counselling?retryWrites=true&w=majority',{
//useNewUrlParser: true,
//} ,() => console.log("database connected"));

app.listen(3001 , () => console.log("Server is started"));;