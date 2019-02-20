const Puppy = require('../models/puppy');

module.exports = {
  getAllPuppies,
  createPuppy
};

function createPuppy(req, res) {
  Puppy.create(req.body).then(function(puppy) {
    res.status(201).json(puppy);
  });
}

function getAllPuppies(req, res) {
  Puppy.find({}).then(function(puppies) {
    res.status(200).json(puppies);
  });
}