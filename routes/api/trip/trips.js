const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const Trip = require('../../../model/Trip')


const Profile = require('../../../model/Profile')
const OProfile = require('../../../model/OProfile')

const validateTripInput = require('../../../validation/trip')



// @route GET api/trips
// @desc Get all Post
// @access Public

router.get('/',(req,res)=>{
    Trip.find()
        .sort({date:-1})
        .then(trips => res.json(trips))
        .catch(err => res.status(404).json(err))
})


// @route GET api/trips/:id
// @desc Get Trips by id
// @access Public

router.get('/:id',(req,res)=>{
    Trip.findById(req.params.id)
        .then(trip => res.json(trip))
        .catch(err => res.status(404).json(err))
})

// @route POST api/posts
// @desc Create Post
// @access Private

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateTripInput(req.body);
  
      // Check Validation
      if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
      }
           
           if(req.user.isOrganizer){
                const newTrip = new Trip({
                    organizer: req.user.id,
                    designation:req.body.designation,
                    departureDate:req.body.departureDate,
                    numberOfDays:req.body.numberOfDays,
                    title: req.body.title,
                    desc: req.body.desc,
                    image: req.body.image,
                    price:req.body.price,
                    name: `${req.user.firstName} ${req.user.lastName}`,
                    avatar: req.user.avatar,
                    email:req.user.email
                });
                newTrip.save().then(post => res.json(post));

            }
    }
  );


// @route Delete api/trips/:id
// @desc Delete trip by id
// @access Private

router.delete('/:id',
    passport.authenticate('jwt',{session:false}),
    (req,res)=>{
        
        if(req.user.isOrganizer){
            OProfile.findOne({ organizer: req.user.id })
                .then(profile =>{
                    Trip.findById(req.params.id)
                        .then(trip => {
                            if(trip.organizer.toString() === req.user.id){
                                trip.remove()
                                .then(()=>res.json({success:true}))
                            }
                           
                            else{
                            return res.status(401).json({ notaurthorized: 'user not authorized'})
                            }
                           
                        })
                        .catch(err => res.status(404).json({ triptnotfound: 'No trip found'}))
                })
        }
})


// @route Trip api/trips/join/:id
// @desc Join Trip
// @access Private

router.post('/join/:id',
    passport.authenticate('jwt',{session:false}),
    (req,res)=>{
        if(req.user.isUser){
            Profile.findOne({ user: req.user.id })
                .then(profile =>{
                    
                    Trip.findById(req.params.id)
                        .then(trip => {
                            if(trip.tourists.filter(tourist => tourist.user+"" === req.user.id || tourist.user+"" === req.user.id).length>0){
                               
                                
                               return res.status(400).json({alreadyjoined:'user already joined'})
                            }
                            post.likes.unshift({ user: req.user.id });

                            trip.save().then(trip => res.json(trip))
                            
                        })
                        .catch(err => 
                             res.status(404).json({ postnotfound: 'No post found'})
                            )
                })
             }
             else {
                 res.status(401).json({"unauthorised":"user not valid"})
             }
            //else if(req.user.isOrganizer){
            //     OProfile.findOne({ organizer: req.user.id })
            //         .then(profile =>{
            //             Trip.findById(req.params.id)
            //                 .then(trip => {
            //                     if(trip.tourists.filter(tourist => tourist.organizer+"" === req.user.id || tourist.user+"" === req.user.id).length>0){
                                  
            //                         trip.tourists.shift({organizer:req.user.id})
                                    
            //                         //return res.status(400).json({alreadyliked:'user already liked'})
            //                     }else{
                                    
            //                     trip.tourists.unshift({ organizer: req.user.id })
            //                     }
                                
            //                     trip.save().then(trip => res.json(trip))
                                
            //                 })
            //                 .catch(err =>
            //                      // res.status(404).json({ postnotfound: 'No trip found'})
            //                 console.log(err)
            //                     )
            //         })
            //     }
})



module.exports = router;
