const { Genre } = require('../src/database/models');

async function getGenre(id) {
    const genre = await Genre.findByPk(id, { 
        include: ['movies']
    });
    console.log(genre.name);
    console.log('--------------------------------')
    genre.movies.forEach(movie => console.log(movie.title));
}

getGenre(3);
