const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var path = require('path');
const flash = require("flash");


const usersRoute = require('./routes/users');
const mongoose = require('mongoose');
var logger = require('morgan');


const app = express();
const port = process.env.PORT || 3010;

const uri = 'mongodb://localhost:27017/my-measures';
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.Promise = global.Promise;
mongoose.connect(uri, opts).then(
  () => {
    console.log('Connected to mongoDB');
  },
  (err) => console.log('Error connecting to mongoDB', err)
);


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(flash());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));


app.use(passport.initialize());
app.use(passport.session());

var Account = require('./models/Account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


app.use('/api/users', usersRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = {app};
