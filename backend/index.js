const express = require ('express');
const cors = require('cors');
const mongoose  = require('mongoose');

const routes = require('./routers/index');
require('dotenv').config();

//db password = 5nylBIgqgHfprmwM
const app= express();
app.use(cors());
app.use(express.json());


//conect data  base
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//route call function
app.use('/',routes);

const port = process.env.PORT;

app.listen(port,() => {
    console.log("Server is running on port:",port)
})