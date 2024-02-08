const {validateToken} = require('../services/auth');

function checkAuthenticationCookie(cookieName) {  
  return (req, res, next) => {
    const token = req.cookies[cookieName];
    if (!token) {
      return next();
    }

    const payload = validateToken(token);
    if(payload){
      req.user = payload;
    }

    return next();
  }
}

module.exports = {
    checkAuthenticationCookie
}