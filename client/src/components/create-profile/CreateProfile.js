import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import InputGroup from '../common/InputGroup';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    if ( nextProps.errors ) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram
    };

    this.props.createProfile(profileData, this.props.history);
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if ( displaySocialInputs ) {
      socialInputs = (
        <div>

          <InputGroup
            placeholder='LinkedIn Profile URL'
            name='linkedin'
            icon='fa fa-linkedin'
            value={ this.state.linkedin }
            onChange={ this.onChange }
            error={ errors.linkedin }
          />

          <InputGroup
            placeholder='Facebook Profile URL'
            name='facebook'
            icon='fa fa-facebook'
            value={ this.state.facebook }
            onChange={ this.onChange }
            error={ errors.facebook }
          />

          <InputGroup
            placeholder='YouTube Profile URL'
            name='youtube'
            icon='fa fa-youtube'
            value={ this.state.youtube }
            onChange={ this.onChange }
            error={ errors.youtube }
          />

          <InputGroup
            placeholder='Instagram Profile URL'
            name='instagram'
            icon='fa fa-instagram'
            value={ this.state.instagram }
            onChange={ this.onChange }
            error={ errors.instagram }
          />

          <InputGroup
            placeholder='Twitter Profile URL'
            name='twitter'
            icon='fa fa-twitter'
            value={ this.state.twitter }
            onChange={ this.onChange }
            error={ errors.twitter }
          />

        </div>
      );
    } 

    // Select options for status field
    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Student', value: 'Student' },
      { label: 'Intern', value: 'Intern' },
      { label: 'Junior Developer', value: 'Junior Developer' },
      { label: 'Developer', value: 'Developer' },
      { label: 'Senior Developer', value: 'Senior Developer' },
      { label: 'Instructor', value: 'Instructor' },
      { label: 'Manager', value: 'Manager' },
      { label: 'Other', value: 'Other' },
    ];

    return (
      <div className='create-profile'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>

              <h1 className='display-4 text-center'>Create Your Profile</h1> 
              <p className='lead text-center'>Make yourself stand out!</p>
              <small className='d-block pd-3'>* = required fields</small>

              <form onSubmit={ this.onSubmit }>

                <TextFieldGroup
                  placeholder='* Profile Handle'
                  name='handle'
                  value={ this.state.handle }
                  onChange={ this.onChange }
                  error={ errors.handle }
                  info='A unique handle for your profile URL'
                  addBreak={ false }
                />

                <SelectListGroup
                  options={ options }
                  placeholder='* Status'
                  name='status'
                  value={ this.state.status }
                  onChange={ this.onChange }
                  error={ errors.status }
                  info='Where are you professionally?'
                  addBreak={ false }
                />

                <TextFieldGroup
                  placeholder='Skills'
                  name='skills'
                  value={ this.state.skills }
                  onChange={ this.onChange }
                  error={ errors.skills }
                  info='Use comma seperated valeus (ex: HTML,CSS,JavaScript,Python)'
                  addBreak={ false }
                />

                <TextFieldGroup
                  placeholder='Company'
                  name='company'
                  value={ this.state.company }
                  onChange={ this.onChange }
                  error={ errors.company }
                />

                <TextFieldGroup
                  placeholder='Website'
                  name='website'
                  value={ this.state.website }
                  onChange={ this.onChange }
                  error={ errors.website }
                />

                <TextFieldGroup
                  placeholder='Location'
                  name='location'
                  value={ this.state.location }
                  onChange={ this.onChange }
                  error={ errors.location }
                />

                <TextFieldGroup
                  placeholder='GitHub Username'
                  name='githubusername'
                  value={ this.state.githubusername }
                  onChange={ this.onChange }
                  error={ errors.githubusername }
                  info='If you want your latest repos & a GitHub link, include your username'
                  addBreak={ false }
                />

                <TextAreaFieldGroup
                  placeholder='Short Bio'
                  name='bio'
                  value={ this.state.bio }
                  onChange={ this.onChange }
                  error={ errors.bio }
                />

                <div className='mb-3'>
                  <button 
                    type='button'
                    onClick={ () => {
                      this.setState( prevState => ({
                        displaySocialInputs: !prevState.displaySocialInputs     
                      })
                    )}
                  }
                    className='btn btn-light' 
                  >Add Social Network Links</button>
                  <span className='text-muted ml-2'>Optional</span> 
                </div>

                { socialInputs }
                
                <input type='submit' value='Submit' className='btn btn-info btn-block mt-4' />
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.proile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })( withRouter(CreateProfile) );
