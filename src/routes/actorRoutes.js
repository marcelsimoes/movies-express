const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.get('/movies/detail/:id/actors', actorController.actorsFromMovie);
router.get('/actors', actorController.list);
router.get('/actors/detail/:id', actorController.detail);


module.exports = router;