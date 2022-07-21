module.exports = (sequelize, DataType) => {
    const Movie = sequelize.define('Movie', 
    {
        id:{
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        
        title: DataType.STRING,

        rating: DataType.FLOAT,

        awards: DataType.INTEGER,

        release_date: DataType.DATE,

        length: {
            type:DataType.INTEGER,
            allowNull: true
        },

        genre_id: {
            type:DataType.INTEGER,
            foreignkey: true,
            allowNull: true
        }
    },
    {
        tableName: 'movies',
        timestamps: false
    })
    
    Movie.associate = (models) => {
        Movie.belongsTo(models.Genre, {
            as: 'genres',
            foreignKey: 'genre_id',
            targetKey: 'id'
            
        }),

        Movie.hasMany(models.Actor, {
            foreignKey: 'favorite_movie_id',
            as: 'favorite_movie'
        }),

        Movie.belongsToMany(models.Actor,{
            as: 'actors',
            foreignKey:'movie_id',
            otherKey: 'actor_id',
            through: models.ActorMovie
        })
    }
    return Movie;
}