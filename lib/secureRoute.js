const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const User = require('../models/user');

function secureRoute(req, res, next){

  if(!req.header.authorization){
    return res.status(401).json({message: 'no token sent'});
  }

  const token = req.headers.authorization.replace('Bearer ', '');
  function handleVerify(err, result){
    if (err) {
      return res.status(401).json({ message: 'Token invalid'});
    }
    User
      .findById(result.sub)
      .then(user => {
        if (!user) return res.status(401).json({message: 'user not found'});
        req.user = user;
        return next();
      });
  }
  jwt.verify(token, secret, handleVerify );
  return next();
}

module.exports = secureRoute;
