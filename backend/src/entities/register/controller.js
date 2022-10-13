const pool = require('../../../database/db');

const register = async(req, res, next)=>{
    try{
        const {email, login, passwd} = req.body;
        const query = await pool.query(`SELECT nick, email FROM users WHERE nick = '${login}' OR email = '${email}';`);
        if(query.rows.length > 0){
            if(query.rows[0].nick === login){
                res.status(409).json({msg: "Konto o podanym loginie już istnieje!"});
                return;
            } 
            else if(query.rows[0].email === email){
                res.status(409).json({msg: "Na podany e-mail istnieje juz zarejestrowane konto!"});
                return;
            }
        }else{
            await pool.query(`INSERT INTO users(nick, password, email) VALUES('${login}', '${passwd}', '${email}');`);
            next();
        }
    }
    catch(err){
        res.status(500).json({msg: "Błąd serwera"});
    }
}

module.exports = {
    register
}