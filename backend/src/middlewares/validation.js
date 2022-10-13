const {validationResult} = require('express-validator');

const validation = (req, res, next)=>{
    const result = validationResult(req)
    if(!result.isEmpty()){
        res.status(409).json({msg: result.array()[0].msg});
    }else{
        next();
    }
}

module.exports = {validation}