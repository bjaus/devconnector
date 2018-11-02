const Validator = require('validator');
const isEmpty = require('./is-empty');

const nameMin = 2;
const nameMax = 30;
const pwMin = 6;
const pwMax = 30;

const validateRegisterInput = data => {
  let errors = {};

  data.name = !isEmpty( data.name ) ? data.name : '';
  data.email = !isEmpty( data.email ) ? data.email : '';
  data.password = !isEmpty( data.password ) ? data.password : '';
  data.password2 = !isEmpty( data.password2 ) ? data.password2 : '';

  if ( Validator.isEmpty(data.name) ) {
    errors.name = 'Name field is required';
  } else if ( !Validator.isLength(data.name, { min: nameMin, max: nameMax }) ) {
    errors.name = `Name must be between ${nameMin} and ${nameMax} characters`;
  }

  if ( Validator.isEmpty(data.email) ) {
    errors.email = 'Email field is required';
  } else if ( !Validator.isEmail(data.email) ) {
    errors.email = 'Email is invalid';
  }

  if ( Validator.isEmpty(data.password) ) {
    errors.password = 'Password field is required';
  } else if ( !Validator.isLength(data.password, { min: pwMin, max: pwMax }) ) {
    errors.password = `Password must be at least ${pwMin} characters`;
  }

  if ( Validator.isEmpty(data.password2) ) {
    errors.password2 = 'Comfirm Password field is required';
  } else if ( !Validator.equals(data.password, data.password2) ) {
    errors.password2 = 'Passwords must match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = validateRegisterInput;
