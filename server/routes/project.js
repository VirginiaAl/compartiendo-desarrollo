const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


//create
router.post('/', (req, res, next) => {

  const newProject = new Project({
    association: req.body.association,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    financing: req.body.financing,
    benificiaries: req.body.benificiaries,
    link: req.body.link
  });


    newProject.save()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});


//list
router.get('/', (req, res, next) => {
  Project.find()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err))
});

//update
router.post('/:id', (req, res, next) => {
  const productId = req.params.id;


  const updates = {
    association: req.body.association,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    financing: req.body.financing,
    benificiaries: req.body.benificiaries,
    link: req.body.link
  };

  Project.findByIdAndUpdate(projectId, updates, {new: true})
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err))

});

//delete
router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Product.findByIdAndRemove(id)
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err))


});


module.exports = router;