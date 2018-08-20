const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res, next){
  User
    .create(req.body)
    .then(() => res.json({message: 'registration successful'}))
    .catch(next);
}
function login(req, res, next){
  User
    .findOne({email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)){
        return res.status(401).json({message: 'Unauthorised'});
      }
      const token = jwt.sign({sub: user.id, admin: false}, secret, {expiresIn: '2hr'});
      console.log('token created', token);
      return res.json({message: `Welcome back ${user.userName}`, token});
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
