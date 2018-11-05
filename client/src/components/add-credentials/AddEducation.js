import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      school: '',
      degree: '',
      fieldOfStudy: '',
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

  componentWillReceiveProps(nextProps) {
    if ( nextProps.errors ) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldOfStudy: this.state.fieldOfStudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
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
      <div className='add-education'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>

              <h1 className='display-4 text-center'>Add Education</h1>
              <p className='lead text-center'>Add any shcool, bootcamp, etc that you've attended</p>
              <small className='d-block pb-3'>* = required fields</small>

              <form onSubmit={ this.onSubmit }>
                
                <TextFieldGroup
                  placeholder='* School'
                  name='school'
                  value={ this.state.school }
                  onChange={ this.onChange }
                  error={ errors.school }
                />
                
                <TextFieldGroup
                  placeholder='* Degree or Certifiation'
                  name='degree'
                  value={ this.state.degree }
                  onChange={ this.onChange }
                  error={ errors.degree }
                />
                
                <TextFieldGroup
                  placeholder='* Field of Study'
                  name='fieldOfStudy'
                  value={ this.state.fieldOfStudy }
                  onChange={ this.onChange }
                  error={ errors.fieldOfStudy }
                />
                
                <TextFieldGroup
                  label='From Date'
                  type='date'
                  name='from'
                  placeholder='mm/dd/yyyy'
                  value={ this.state.from }
                  onChange={ this.onChange }
                  error={ errors.from }
                />

                <TextFieldGroup
                  label='To Date'
                  type='date'
                  name='to'
                  placeholder='mm/dd/yyyy'
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
                    Currently Attending
                  </label>
                </div>

                <TextAreaFieldGroup
                  placeholder='Program Description'
                  name='description'
                  value={ this.state.description }
                  onChange={ this.onChange }
                  error={ errors.description }
                  info='What did you learn?'
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { addEducation })( withRouter(AddEducation) );
