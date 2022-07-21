const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);

router.get('/movies/new', moviesController.new);

router.get('/movies/recommended', moviesController.recomended);

router.get('/movies/detail/:id', moviesController.detail);

router.get('/movies/create', moviesController.viewCreate);
router.post('/movies/create', moviesController.create);

router.get('/movies/update/:id', moviesController.viewUpdate);
router.put('/movies/update/:id', moviesController.update);

router.get('/movies/delete/:id', moviesController.viewDelete);
router.delete('/movies/delete/:id', moviesController.delete);

module.exports = router;