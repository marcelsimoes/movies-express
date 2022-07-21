
module.exports = (sequelize, DataType) => {
    const Episode = sequelize.define('Episode', 
    {
        id:{
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        title: DataType.STRING,

        number: DataType.INTEGER,

        release_date: DataType.DATE,

        rating: DataType.FLOAT,

        season_id: {
            type:DataType.INTEGER,
            foreignkey: true
        }
    },
    {
        tableName: 'episodes',
        timestamps: false
    })
    
    Episode.associate = (models) => {
        Episode.belongsTo(models.Season, {
            foreignKey: 'season_id',
            as: 'seasons'
        }),

        Episode.belongsToMany(models.Actor,{
            foreignKey:'episode_id',
            otherKey: 'actor_id',
            through: 'ActorEpisode'
        })
    }
    return Episode;
}