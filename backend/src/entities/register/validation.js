const {check} = require('express-validator');

const validationRegister = [
    check('email').trim().notEmpty().withMessage('Pole Email nie może być puste.').isEmail().withMessage('Email ma niepoprawny format.').normalizeEmail().withMessage('Email ma niepoprawny format.'),
    check('login').trim().notEmpty().withMessage('Pole Login nie może być puste.').isLength({ min: 5, max: 25 }).withMessage('Login musi mieć od 5 do 25 znaków (litery, cyfry, znak podłogi).'),
    check('passwd').notEmpty().withMessage('Pole Hasło nie może być puste.').isStrongPassword({minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 0}).withMessage('Hasło musi zawierać minimum 8 znaków w tym 1 cyfrę oraz 1 wielką literę.'),
]

const checkSamePassword = (req,res,next)=>{
    const {passwd, repeatPasswd} = req.body;
    if(passwd === repeatPasswd){
        next();
    }else{
        res.status(409).json({msg: "Potwierdzenie hasła jest różne od oryginału."});
    }
}

module.exports = {checkSamePassword, validationRegister};