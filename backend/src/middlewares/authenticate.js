const jwt=  require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const authenticate = async (req, res, next) => {
    if (Boolean(!req.headers.authorization)) return res.status(401).json({msg: "Brak tokenu do uwierzytelnienia!"});
    let token;
    let publicKey
    try {
        token = req.headers.authorization;
        publicKey = fs.readFileSync(path.resolve(__dirname, "..", "..", "authorization", "jwtRS256.key"));
    }
    catch (err) {
        return res.status(500).json({msg: "Błąd serwera!"});
    }
    try {
        req.body.middleware_user = jwt.verify(token.split(' ')[1], publicKey);
        next();
    }
    catch (err) {
        return res.status(401).json({msg: "Token wygasł, bądź jest błędny!"});
    }
}

module.exports = authenticate;