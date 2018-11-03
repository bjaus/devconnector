import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className='from-group'>
      <input
        type={ type }
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
        disabled={ disabled }
      />
      { error && <div className='invalid-feedback'>{ error }</div> }
      { info && <small className='form-text text-muted text-center'>{ info }</small> }
      <br/>
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
