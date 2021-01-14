const router = require('express').Router();
const User = require('../model/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation }= require('../model/validation');


//validation


router.post('/register',async (req,res)=>{

    // validate data
    let error = registerValidation(req.body).error
    if (error) return res.status(400).send(error.details[0].message)

    // check if user already exist 
    let userexist =  await  User.findOne({email: req.body.email});
    if (userexist) return res.status(400).send('Email already exist ')

    //hash password
    let salt = await bcrypt.genSalt(10);
    let  hashpassword = await  bcrypt.hash(req.body.password, salt)

    // create new user after validation 
    const user = new User({
        name:req.body.name,
        email:req.body.email,    
        password : hashpassword
    })

    try{
        // save new user if validated
         const saveduser = await user.save()
         res.send({user:saveduser._id})

    }catch(error){
        console.log(`error ${error.message}`)

    }
});
 router.post('/login',async(req, res)=>{

    let {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    // check if user exist 
    let userexist =  await  User.findOne({email: req.body.email});
    if (!userexist) return res.status(400).send('Email not found')

    // check if password is correct 
     const  validpass = await bcrypt.compare(req.body.password, userexist.password);
    if (!validpass) return res.status(400).send('password not found')

    const  token = jwt.sign({user:userexist._id},process.env.Token_Secret);
    res.header('auth-token',token).send(token);
    





 })

module.exports = router;
