const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const validateProfileInput = require('../../../validation/profile')


const OProfile = require('../../../model/OProfile');
const Organizer = require('../../../model/Organizer');

mongoose.set('useFindAndModify', false);




// @route Get api/profile
// @desc Get Currect User Profile
// @access Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    OProfile.findOne({ organizer: req.user.id })
      .populate('organizer', ['firstName', 'avatar'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this Organizer';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);


// @route Get api/profile/handle/:handle
// @desc Get profile handle
// @access Public

router.get('/handle/:handle',(req,res)=> {

    const errors ={}

    OProfile.findOne({handle: req.params.handle})
    .populate('organizer',['firstName','avatar'])
    .then(profile => {
        if(!profile){
            errors.noprofile = 'There is no profile for this organizer!'
            res.status(404).json(errors)
        }

        res.json(profile)
    })
    .catch(err => res.status(404).json(err))
})

// @route Get api/profile/user/:id
// @desc Get profile by user id
// @access Public

router.get('/organizer/:organizer_id',(req,res)=> {

    const errors ={}

    OProfile.findOne({organizer: req.params.organizer_id})
    .populate('organizer',['firstName','avatar'])
    .then(profile => {
        if(!profile){
            errors.noprofile = 'There is no profile for this organizer!'
            res.status(404).json(errors)
        }

        res.json(profile)
    })
    .catch(err => res.status(404).json(err))
})

// @route Get api/profile/all
// @desc Get all profiles
// @access Public

router.get('/all',(req,res)=>{
    const errors = {}

    OProfile.find()
        .populate('organizer',['firstName','lastName','avatar'])
        .then(profile =>{
            if(!profile){
                errors.noprofile = 'There are no profiles',
                res.status(404).json(errors)
            }

            res.json(profile)
        })
        .catch(err =>{
            res.status(404).json(err)
        })
});


// @route POST api/profile
// @desc Create OR Update User Profile
// @access Private
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateProfileInput(req.body);
  
      // Check Validation
      if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
      }
      const profileFields = {};
      profileFields.organizer = req.user.id;
 
      if (req.body.handle) profileFields.handle = req.body.handle;
      if (req.body.bio) profileFields.bio = req.body.bio;
  
      profileFields.social = {};
      if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
      if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
      if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
      if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
  
      OProfile.findOne({ organizer: req.user.id }).then(profile => {
        if (profile) {
          // Update
          OProfile.findOneAndUpdate(
            { organizer: req.user.id },
            { $set: profileFields },
            { new: true }
          ).then(profile => res.json(profile))
          .catch(err =>{
            res.status(404).json(err)
          }) 
            
        } else {
            // Create
    
            // Check if handle exists
            OProfile.findOne({ handle: profileFields.handle }).then(profile => {
              if (profile) {
                errors.handle = 'That handle already exists';
                res.status(400).json(errors);
              }
    

              new OProfile(profileFields)
                    .save()
                    .then(profile => res.json(profile))
                    .catch(err=> {res.json(err)})
            })
        }
    })

}
)


module.exports = router;