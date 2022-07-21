const { Movie, Actor } = require('../database/models');

const actorController = {
    actorsFromMovie: async (req, res) => {
        const { id } = req.params
        const movie = await Movie.findByPk(id, {
            include:[{
                association: 'actors',
                include: 'favorite_movie'
            }]
        })
        return res.render('./actors/actorsFromMovieList', { actors: movie.actors, movie })
    },

    list: async (req, res) => {
        const actors = await Actor.findAll()
        return res.render('./actors/actorList', { actors })
    },

    detail: async (req, res) => {
        const { id } = req.params;
        const actor = await Actor.findByPk(id,{
            include: ['favorite_movie', 'movies']
        })

        return res.render('./actors/actorDetail', { actor, movies: actor.movies })
    },

}

module.exports = actorController;