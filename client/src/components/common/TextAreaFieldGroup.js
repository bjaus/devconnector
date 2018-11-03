import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  addBreak
}) => {
  return (
    <div className='from-group'>
      <textarea
        className={ 
          classnames('form-control form-control-lg', 
          {
            'is-invalid': error
          }
        )}
        placeholder={ placeholder }
        name={ name }
        value={ value }
        onChange={ onChange }
      />
      { error && <div className='invalid-feedback'>{ error }</div> }
      { info && <small className='form-text text-muted text-center'>{ info }</small> }
      { addBreak && <br/> }
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  addBreak: PropTypes.bool.isRequired
};

TextAreaFieldGroup.defaultProps = {
  addBreak: true
};

export default TextAreaFieldGroup;
