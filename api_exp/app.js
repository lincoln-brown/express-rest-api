const express = require('express')
const app = express();
let PORT = 5000
const mongoose = require('mongoose');
const dotenv= require('dotenv');
dotenv.config()
app.use(express.json());
//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');


// database connect
let opt={ useUnifiedTopology: true,
    useNewUrlParser: true  }

mongoose.connect(process.env.DB_connect,opt,()=>{
    console.log("connected to data base");
})



// routes
app.use('/api/posts' ,postRoute)
app.use('/api/users', authRoute)



 app.listen(PORT, ()=>{
console.log(`started on ${PORT}`)
 });