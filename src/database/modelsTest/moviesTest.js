const { Op } = require('sequelize');
const {Movie} = require('../models/index');

const moviesAll = async () => {
    const movies = await Movie.findAll();
    console.log(movies)
}
// moviesAll();

const moviesAllWhere = async () => {
    const movies = await Movie.findAll({
        where:{
            [Op.and]: [
                {
                  rating: {
                    [Op.gt]: 9
                  }
                },
                {
                  awards: {
                    [Op.gt]: 2
                  }
                }
            ]
        }
    });
    movies.length > 0 ? console.log(movies) : console.log('not found');
}
// moviesAllWhere();

const moviePk = async () => {
    const movie = await Movie.findByPk(1);
    console.log(movie);
}
// moviePk();

const movieOne = async () => {
    const movie  = await Movie.findOne({where : { title: {[Op.like]: '%harry%'} }})
    console.log(movie);
}
// movieOne();

