const { Movie, Genre } = require('../database/models');

const moviesController = {
    list: async (req, res) => {
        const movies = await Movie.findAll();
        return res.render('./movies/moviesList', { movies });
    },

    detail: async (req, res) => {
        const {id} = req.params;
        const movie = await Movie.findOne({
            where: {id},
            include:{
                association: 'genres'
            }
        });
        return res.render('./movies/moviesDetail', { movie });
    },

    recomended: async (req, res) => {
        const movies = await Movie.findAll({
            order : [
                ['rating', 'DESC']
            ]
        });
        return res.render('./movies/recommendedMovies', { movies })
    },
    
    new: async (req, res) => {
        const movies = await Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ]
        });
        return res.render('./movies/newestMovies', { movies })
    },

    viewCreate: async (req, res) => {
        const genres = await Genre.findAll();
        return res.render('./movies/moviesAdd', { genres });
    },

    create: async ( req, res) => {
        const {title, rating, awards, release_date, length, genre_id} = req.body;
        await Movie.create({
            title,
            rating,
            awards,
            release_date,
            length,
            genre_id: parseInt(genre_id)
        });
        return res.redirect('/movies');
    },
    
    viewUpdate: async (req, res) => {
        const genres = await Genre.findAll();
        const {id} = req.params;
        const movie = await Movie.findByPk(id, {
            include: 'genres',
        }) 
        return res.render('./movies/moviesEdit', {movie, genres});
    },

    update: async (req, res) => {
        const { id } = req.params
        let {title, rating, awards, release_date, length, genre_id} = req.body;
        const movie = await Movie.findByPk(id);
        await Movie.update({
            title: title ? title : movie.title,
            rating: rating ? rating : movie.rating,
            awards: awards ? awards : movie.awards,
            release_date: release_date ? release_date : movie.release_date,
            length: length ? length : movie.length,
            genre_id: genre_id ? parseInt(genre_id) : movie.genre_id 
        },
        {
            where: { id }
        })
        return res.redirect('/movies');
    },

    viewDelete: async (req, res) => {
        const { id } = req.params;
        const movie = await Movie.findByPk(id);
        return res.render('./movies/moviesDelete', { movie })
    },

    delete: async (req, res) => {
        const { id } = req.params;
        Movie.destroy({
            where: { id }
        });
        return res.redirect('/movies');
    }
}

module.exports = moviesController;