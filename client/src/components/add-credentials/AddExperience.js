import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';


class AddExperience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      company: '',
      title: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const expData = {
      company: this.state.company
    }

//    this.props.addExperience(expData, this.props.history);
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className='add-experience'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>

              <h1 className='display-4 text-center'>Add Experience</h1>
              <p className='lead text-center'>Add any job or position you've ever held</p>
              <small className='d-block pb-3'>* = required fields</small>

              <form onSubmit={ this.onSubmit }>
                
                <TextFieldGroup
                  placeholder='* Company'
                  name='company'
                  value={ this.state.company }
                  onChange={ this.onChange }
                  error={ errors.company }
                />
                
                <TextFieldGroup
                  placeholder='* Job Title'
                  name='title'
                  value={ this.state.title }
                  onChange={ this.onChange }
                  error={ errors.title }
                />
                
                <TextFieldGroup
                  placeholder='Location'
                  name='location'
                  value={ this.state.location }
                  onChange={ this.onChange }
                  error={ errors.location }
                />
                
                <TextFieldGroup
                  label='From Date'
                  type='date'
                  name='from'
                  value={ this.state.from }
                  onChange={ this.onChange }
                  error={ errors.from }
                />

                <TextFieldGroup
                  label='To Date'
                  type='date'
                  name='to'
                  value={ this.state.to }
                  onChange={ this.onChange }
                  error={ errors.to }
                  disabled={ this.state.disabled ? 'disabled': '' }
                />

                <div className='form-check mb-4'>
                  <input 
                    type='checkbox' 
                    className='form-check-input'
                    name='current'
                    value={ this.state.current }
                    checked={ this.state.current }
                    onChange={ this.onCheck }
                    id='current'
                  />
                  <label className='form-check-label' htmlFor='current'>
                    Current Job
                  </label>
                </div>

                <TextAreaFieldGroup
                  placeholder='Job Description'
                  name='description'
                  value={ this.state.description }
                  onChange={ this.onChange }
                  error={ errors.description }
                  info='What did you do in this position?'
                />

                <input 
                  type='submit' 
                  value='Submit' 
                  className='btn btn-info btn-block' 
                />

              </form>

            </div>
          </div>
        </div>
      </div> 
    );
  }
}

AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)( withRouter(AddExperience) );
