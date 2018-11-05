import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
  name,
  placeholder,
  type,
  value,
  label,
  error,
  info,
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
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.string,
  addBreak: PropTypes.bool,
};

TextFieldGroup.defaultProps = {
  type: 'text',
  addBreak: true
};

export default TextFieldGroup;
