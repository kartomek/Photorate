const jwt = require('jsonwebtoken');
const fs = require("fs");
const path = require("path");
const pool = require("../../../database/db.js");

const checkToken =(req,res)=>{
    res.status(200).json({
        login : req.body.middleware_user.login,
        role : req.body.middleware_user.role
    });
}

const encryption = (privateKey, login, role)=>{
    const payLoad = {
        login,
        role
    }
    const token = jwt.sign(payLoad, privateKey, {
        expiresIn: '24h'
    });
    return token;     
}

const login = async(req,res)=>{
    try{
        const {login, passwd} = req.body;
        const query = await pool.query(`SELECT role FROM users WHERE nick = '${login}' AND password = '${passwd}';`);
        if(query.rows.length > 0){
            const privateKey = fs.readFileSync(path.resolve(__dirname, "..", "..", "..", "authorization", "jwtRS256.key"));
            const token =  encryption(privateKey, login, query.rows[0].role);
            res.status(200).json({
                token,
                login,
                "role" : query.rows[0].role
            }); 
        }else res.status(401).json({msg: "Podano błędny login lub hasło!"});
    }
    catch(err){
        res.status(500).json({msg: "Błąd serwera!"});
    }
}

module.exports = {login, checkToken};