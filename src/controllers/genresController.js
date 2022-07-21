const { Genre, Movie } = require('../database/models');

const genreController = {
    list: async (req, res) => {
        const genres = await Genre.findAll();
        return res.render('./genres/genresList', { genres });
    },

    detail: async (req, res) => {
        const{ genres } = req.query;
        const genre = await Genre.findOne({
            where: {
                name: genres
            }
        });

        const movies = await Movie.findAll({
            where: {genre_id: genre.id},
            association: 'genres'
        })
        return res.render('./genres/genresDetail', { genre, movies });
    },
    
    moviesFromGenres: async (req, res) => {
        const { id } = req.params
        const genre = await Genre.findOne({ where: {id} });

        const movies = await Movie.findAll({
            where: {genre_id: id},
            association: 'genres'
        })
        return res.render('./genres/moviesGenresList', { movies, genre });
    }
}

module.exports = genreController;