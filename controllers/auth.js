const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const User = require('../models/user');


exports.login = (req, res, next) => {
  const email = req.body.email;
  const accessToken = req.body.accessToken;
  const image = req.body.image;
  const ID = req.body.id
  let loadedUser;
  User.findOne({ email: email })
    .then(user => {
        if (!user) {
            const user = new User({
                accessToken: accessToken,
                email: email,
                ID: ID,
                image: image,
                name: name
            });
            user.save().then(result => {
                const token = jwt.sign(
                    {
                        email: loadedUser.email,
                        userId: loadedUser._id.toString()
                    },
                    'somesupersecretsecret',
                    {expiresIn: '1h'}
                );
                res.status(201).json({token: token, userId: result._id.toString()});
            })
                .catch(err => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        } else {
            loadedUser = user;
            const token = jwt.sign(
                {
                    email: loadedUser.email,
                    userId: loadedUser._id.toString()
                },
                'somesupersecretsecret',
                {expiresIn: '1h'}
            );
            res.status(200).json({token: token, userId: loadedUser._id.toString()});
        }
    });

};
