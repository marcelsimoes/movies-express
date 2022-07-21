
module.exports = (sequelize, DataType) => {
    const ActorMovie = sequelize.define('ActorMovie', 
    {
        id:{
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        actor_id: {
            type:DataType.INTEGER,
            foreignkey: true
        },

        movie_id: {
            type:DataType.INTEGER,
            foreignkey: true
        }
    },
    {
        tableName: 'actor_movie',
        timestamps: false
    })
    
    return ActorMovie;
}