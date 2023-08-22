
const jwt = require("jsonwebtoken")
const config=require('../config/config')

function generateAccessToken (user) {     
    const token=jwt.sign(user,config.ACCESS_TOKEN_SECRET, {expiresIn: "24h"})   
    return token    
    }
function validateToken(req, res, next) {
      //get token from request header
      const authHeader = req.headers["authorization"]
      console.log(authHeader);
      //const token = authHeader.split(" ")[1]
      //console.log(token)
      //the request header contains the token "Bearer <token>", split the string and use the second value in the split array.
      if (authHeader == null) res.send({statusCode:400,message: "Token not present"});

      jwt.verify(authHeader, config.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) { 
         res.send({statusCode:403,message: "Token invalid"});
       }
       else {
       req.user = user
       next() //proceed to the next action in the calling function
       }
      }) //end of jwt.verify()
      } 
      module.exports={generateAccessToken,validateToken}