const jwt = require('jsonwebtoken');

let verified = (req,res,next)=>{
const token= req.header('auth-token');
    if (!token) return res.status(400).send('Access Denied ');
    try {
        const verified = jwt.verify(token, process.env.Token_Secret);
        req.user = verified;
        next();
        
    } catch (error) {
        res.status(400).send('Invalid Token ');
        
    }

}
module.exports = verified;