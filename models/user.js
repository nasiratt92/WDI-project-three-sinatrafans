const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  userName: { type: String, required: true},
  email: {type: String, required: true},
  password: { type: String, required: true}
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;

  });
userSchema.pre('validate', function checkPassword(next){
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'dose not match');
  }
  next();
});

userSchema.pre('save', function hashpassword(next) {
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(5));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
