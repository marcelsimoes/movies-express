async function getOneMovie(id) {
    const movie = await Movie.findByPk(id, { include: 'genre'});
    if (!movie) {
        throw new Error('Movie not found');
    }
    console.log(`
        Title: ${movie.title}
        Genre: ${movie.genre.name}
    `);
    return movie;
}

getOneMovie(2)
