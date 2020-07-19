const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Profile Model
const Profile = require("../../../model/Profile");
const OProfile = require("../../../model/OProfile");

const Notification = require("../../../model/Notification");

router.get("/test", (req, res) => res.json({ msg: "Notification works" }));

router.get('/user/:id',
passport.authenticate('jwt', { session: false }),
(req,res)=>{
    
    Notification.find({user: req.params.id})
        .sort({date:-1})
        .then(posts => res.json(posts)
        )
        .catch(err => res.status(404).json(err))
    
        
})


router.get('/organizer/:id',
passport.authenticate('jwt', { session: false }),
(req,res)=>{
    
    Notification.find({organizer: req.params.id})
        .sort({date:-1})
        .then(posts => res.json(posts)
        )
        .catch(err => res.status(404).json(err))
          
})

module.exports = router;
