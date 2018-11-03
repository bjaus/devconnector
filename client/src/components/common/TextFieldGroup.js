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
  disabled,
  addBreak
}) => {
  return (
    <div className='from-group'>
      { label && <label className='text-muted'>{ label }</label> }
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
      { addBreak && <br/> }
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
  addBreak: PropTypes.bool.isRequired,
};

TextFieldGroup.defaultProps = {
  type: 'text',
  addBreak: true
};

export default TextFieldGroup;
