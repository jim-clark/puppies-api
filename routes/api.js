var express = require('express');
var router = express.Router();
var puppiesCtrl = require('../controllers/puppies');

/* GET /api/puppies */
router.get('/puppies', puppiesCtrl.getAllPuppies);
router.post('/puppies', puppiesCtrl.createPuppy);

module.exports = router;
