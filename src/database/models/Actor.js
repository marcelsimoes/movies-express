
module.exports = (sequelize, DataType) => {
    const Actor = sequelize.define('Actor', 
    {
        id:{
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        created_at: DataType.DATE,

        updated_at: DataType.DATE,
        
        first_name: DataType.STRING,

        last_name: DataType.STRING,

        rating: DataType.FLOAT,

        favorite_movie_id: {
            type:DataType.INTEGER,
            foreignkey: true,
            allowNull: true
        }
    },
    {
        tableName: 'actors',
        underscored: true
    })

    async function getActor(id) {
        const actor = await Actor.findByPk(id, {
            include: ['favoriteMovie', 'movies']
        });
        console.log(`
            ID: ${actor.id}
            Nome: ${actor.firstName} ${actor.lastName}
            FavoriteMovieID: ${actor.favoriteMovieId}
            MovieTitle: ${(actor.favoriteMovie ? actor.favoriteMovie.title : 'Filme não encontrado')}
        `)
    
        console.log('--------------------------------')
        if (actor.movies.length == 0) {
            console.log('No Movies found');
        } else {
            actor.movies.forEach(movie => console.log(movie.title));
        }
    }
    // getActors();
    getActor(5)
    
    
//     Actor.associate = (models) => {
//         Actor.hasOne(models.Movie, {
//             as: 'favoriteMovie',
//             foreignKey: 'id',
//             sourceKey: 'favoriteMovieId
//         }),

//         Actor.belongsToMany(models.Movie,{
//             as: 'movies',
//             foreignKey:'actor_id',
//             otherKey: 'movie_id',
//             through: models.ActorMovie
//         })
//     }
//     return Actor;
// }