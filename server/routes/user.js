const express = require('express');
const router = express.Router();
const User = require('../models/User');

//create
router.post('/', (req, res, next) => {

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });


    newUser.save()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err));
});


//list(read)
router.get('/', (req, res, next) => {
  User.findById()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err))
});

//update
router.post('/:id', (req, res, next) => {
  const userId = req.params.id;


  const updates = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  User.findByIdAndUpdate(projectId, updates, {new: true})
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err))

});

//delete
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err))


});


module.exports = router;
