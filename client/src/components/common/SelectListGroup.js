import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({
  name,
  value,
  error,
  info,
  onChange,
  options,
  addBreak
}) => {
  const selectOptions = options.map(option => (
    <option 
      key={ option.label } 
      value={ option.value }
    >
      { option.label }
    </option>
  ));

  return (
    <div className='from-group'>
      <select
        className={ 
          classnames('form-control form-control-lg', 
          {
            'is-invalid': error
          }
        )}
        name={ name }
        value={ value }
        onChange={ onChange }
      >
        { selectOptions } 
      </select>
      { error && <div className='invalid-feedback'>{ error }</div> }
      { info && <small className='form-text text-muted text-center'>{ info }</small> }
      { addBreak && <br/> }
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  addBreak: PropTypes.bool.isRequired
};

SelectListGroup.defaultProps = {
  addBreak: true
};

export default SelectListGroup;
