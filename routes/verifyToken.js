const jwt = require("jsonwebtoken")


//Verificamos la existencia de un Token valido
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token; 
    console.log("authHeader", authHeader);
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        console.log('tooken', token);
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            console.log("err", err);
            req.user = user
            next();
        })
    } else {
        return res.status(401).json("You are not authenticated")
    }
}


//Autorizamos al user en caso de que sea Admin o sea el mismo usuario que quiere editar su perfil
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        
     if (req.user.id === req.params.id || req.user.isAdmin) {
     next()
     } else {
         res.status(403).json("You are not allowed to do that!");
     }
    })
}

//Autorizamos al user sea Admin
const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log('este es mi req', req);
     if (req.user.isAdmin) {
     next()
     } else {
         res.status(403).json("You are not allowed to do that!");
     }
    })
}

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};