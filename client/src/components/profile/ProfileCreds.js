import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const marginTop = { marginTop: '-10px' }

    const expItems = experience.map( exp => (
      <li key={ exp._id } className='list-group-item'>
        <h4>{ exp.company }</h4>
        <p>
          <strong>From:</strong>
            <Moment format=' YYYY/MM/DD'>{ exp.from }</Moment>
        </p>
        <p style={ marginTop }>
          <strong>To:</strong>
          { exp.to === null ? ' Current ' : ( <Moment format=' YYYY/MM/DD'>{ exp.to }</Moment> ) }
        </p>
        <p style={ marginTop }>
          <strong>Position: </strong>
          { exp.title }
        </p>
        { isEmpty(exp.location) 
          ? null 
          : ( <p style={ marginTop }><strong>Location:</strong> { exp.location }</p> ) 
        }
        { isEmpty(exp.description)
          ? null
          : ( <p style={ marginTop }><strong>Description:</strong> { exp.description }</p> )
        }
      </li>
    ));

    const eduItems = education.map( edu => (
      <li key={ edu._id } className='list-group-item'>
        <h4>{ edu.school }</h4>
        <p>
          <strong>From:</strong>
            <Moment format=' YYYY/MM/DD'>{ edu.from }</Moment>
        </p>
        <p style={ marginTop }>
          <strong>To:</strong>
          { edu.to === null ? ' Current ' : ( <Moment format=' YYYY/MM/DD'>{ edu.to }</Moment> ) }
        </p>
        <p style={ marginTop }>
          <strong>Degree: </strong>
          { edu.degree }
        </p>
        { isEmpty(edu.fieldOfStudy) 
          ? null 
          : ( <p style={ marginTop }><strong>Studied:</strong> { edu.fieldOfStudy }</p> ) 
        }
        { isEmpty(edu.description)
          ? null
          : ( <p style={ marginTop }><strong>Description:</strong> { edu.description }</p> )
        }
      </li>
    ));
    
    return (
      <div className='row'>
        <div className='col-md-6'>
          <h3 className='text-center text-info'>Experience</h3>
          { expItems.length > 0 
            ? <ul className='list-group'>{ expItems }</ul>
            : <p className='text-center'>No Experience Listed</p>
          }
        </div>
        <div className='col-md-6'>
          <h3 className='text-center text-info'>Education</h3>
          { eduItems.length > 0 
            ? <ul className='list-group'>{ eduItems }</ul>
            : <p className='text-center'>No Education Listed</p>
          }
        </div>
      </div>
    );
  }
}

ProfileCreds.propTypes = {
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired
};

export default ProfileCreds;
