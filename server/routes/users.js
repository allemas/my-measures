const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const passport = require('passport');
const flash = require("flash");

const router = express.Router();

router.post('/login', passport.authenticate('local', {
  failureFlash: true
}), (req, res, next) => {
  req.session.save((err) => {
    if (err) {
      return next(err);
    }

console.log("ok");




  });
});

var Account = require('../models/Account');
router.post('/register', (req, res, next) => {

  try {

    Account.register(new Account({username: req.body.username}), req.body.password, (err, account) => {
      console.log(account);


      passport.authenticate('local')(req, res, () => {
        req.session.save((err) => {
          if (err) {
            return next(err);
          }
          res
            .status(201)
            .json({
              title: 'registration successs',
            });


        });
      });

    });

  } catch (e) {
    res.status(400).json({
      errors: [
        {
          title: 'Registration Error',
          detail: 'Something went wrong during registration process.',
          errorMessage: e.message,
        },
      ],
    });
  }

});


router.post('/registerold', async (req, res) => {
  try {
    const {email, password} = req.body;
    console.log(email);
    console.log(password);


    if (typeof password !== 'string') {
      throw new Error('Password must be a string.');
    }

    const u = new User({email: email, password: password});


    const persistedUser = await u.save();

    const userId = persistedUser._id;


    res
      .status(201)
      .json({
        title: 'registration successs',
        user: persistedUser
      });


  } catch (e) {
    res.status(400).json({
      errors: [
        {
          title: 'Registration Error',
          detail: 'Something went wrong during registration process.',
          errorMessage: e.message,
        },
      ],
    });
  }


})


module.exports = router;
