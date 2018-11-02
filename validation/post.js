const Validator = require('validator');
const isEmpty = require('./is-empty');

const postMin =  10;
const postMax = 1000;

const validatePostInput = data => {
  let errors = {};

  data.text = !isEmpty( data.text ) ? data.text : '';

  if ( Validator.isEmpty(data.text) ) {
    errors.text = 'Text field is required';
  } else if ( !Validator.isLength(data.text, { min: postMin, max: postMax }) ) {
    errors.text = `Post must be between ${postMin} and ${postMax} characters`;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

module.exports = validatePostInput;
