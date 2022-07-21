const { Actor } = require('../src/database/models');
async function getActor(id) {
    const actor = await Actor.findByPk(id, {
        include: ['favoriteMovie']
    });
    console.log(`
        ID: ${actor.id}
        Nome: ${actor.firstName} ${actor.lastName}
        FavoriteMovieID: ${actor.favoriteMovieId}
        MovieTitle: ${(actor.favoriteMovie ? actor.favoriteMovie.title : 'Filme não encontrado')}
    `)
}
// getActors();
getActor(1)