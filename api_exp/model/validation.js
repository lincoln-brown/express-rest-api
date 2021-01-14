const Joi = require('@hapi/joi');

const uservalidation= (data)=>{
    const Schema =Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(10).required().email(),
        password: Joi.string().min(8).required()
    });
    return Schema.validate(data);
 
}

const loginvalidation= (data)=>{
    const Schema =Joi.object({
        email: Joi.string().min(10).required().email(),
        password: Joi.string().min(8).required()
    });
    return Schema.validate(data);
 
}


 module.exports.registerValidation = uservalidation;
 module.exports.loginValidation = loginvalidation;