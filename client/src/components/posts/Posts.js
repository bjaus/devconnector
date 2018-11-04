import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostForm from './PostForm';
import Spinner from '../common/Spinner';

class Posts extends Component {
  render() {
    return (
      <div className='feed'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-4 text-center'>Post Feed</h1>
              <PostForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Posts.propTypes

export default connect(null)(Posts);
