const router = require('express').Router();
const User = require('../model/User');
const verified = require('./verifytoken')


router.get('/',verified ,(req, res)=>{
    // res.json({
    //     post:{
    //         title:"some title",
    //         des:"jksjhbrgksrg jsgdilaru j,srtguilrsi gmjrhgliahghbj,"
            
    //     }
    res.send(req.user)
  




})

module.exports = router ;