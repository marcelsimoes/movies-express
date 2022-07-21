const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

router.get('/genres', genresController.list);
router.get('/genres/list/movies/:id', genresController.moviesFromGenres)
router.get('/genres/detail/:genres?', genresController.detail);


module.exports = router;