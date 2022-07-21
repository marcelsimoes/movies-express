
module.exports = (sequelize, DataType) => {
    const ActorEpisode = sequelize.define('ActorEpisode', 
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

        episode_id: {
            type:DataType.INTEGER,
            foreignkey: true
        }
    },
    {
        tableName: 'actor_episode',
        timestamps: false
    })
    
    return ActorEpisode;
}