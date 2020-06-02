const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/auth/users');
const userprofile = require('./routes/api/profile/userProfile');
const posts = require('./routes/api/social/posts')

const organizers = require('./routes/api/auth/organizers');
const message = require('./routes/api/social/message')

mongoose.set('useFindAndModify', false);
const app = express();
// Body Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI

//Connect to MongoDB
mongoose
.connect(db, { useFindAndModify: false,  useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then( ()=> console.log('MongoDB Connected'))
.catch(err => console.log(err))

// Passport middleware
app.use(passport.initialize());

  // Express Messages Middleware
  app.use(require('connect-flash')());
  app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
  });

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', userprofile);
app.use('/api/posts',posts);


app.use('/api/organizers', organizers);
app.use('/api/messages', message)

// app.use('/api/profile', profile);

// app.use('/api/admins', admins);
const port = process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server running on port ${port}`))