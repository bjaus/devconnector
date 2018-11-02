const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post Model
const Post = require('../../models/Post');

// Profile Model
const Profile = require('../../models/Profile');

// Post Validation
const validatePostInput = require('../../validation/post');

// @route  GET api/posts
// @desc   Return all posts
// @access Public
router.get('/',
  (req, res) => {
    const errors = {};

    Post.find()
      .sort({date: -1})
//      .populate('user', ['name', 'avatar'])
      .then(posts => res.json(posts))
      .catch(err => {
        errors.posts = 'Nothing has been posted yet'; 
        res.status(404).json(errors);
      });
  }
);

// @route  GET api/posts/test
// @desc   Tests post route
// @access Public
router.get( '/test', (req, res) => {
  res.json( { msg: 'Posts Works' } )
});

// @route  POST api/posts
// @desc   Create a post
// @access Private
router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if ( !isValid ) {
      return res.status(400).json(errors);
    }

    const newPost  =  new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

// @route  GET api/posts/:id
// @desc   Get post by ID
// @access Public
router.get('/:id',
  (req, res) => {
    const errors = {};

    Post.findById(req.params.id)
      .then(post => res.json(post))
      .catch(err => {
        errors.notPostFound = 'No post found with that ID'; 
        res.status(404).json(errors);
      });
  }
);

// @route  DELETE api/posts/:id
// @desc   Remove post by ID
// @access Private
router.delete('/:id',
  passport.authenticate('jwt', { session: false } ),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id }).then( profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if ( post.user.toString() !== req.user.id ) {
              errors.notAuthorized = 'User not authorized';
              return res.status(401).json(errors);
          }

          // Delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => {
          errors.postNotFound = 'No post found with that ID';
          res.status(404).json(errors);
        });
    })
    .catch( err => {
      errors.notAuthorized = 'User not found';
      res.status(404).json(errors);
    });
  }
);

module.exports = router;
