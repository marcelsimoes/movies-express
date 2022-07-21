
module.exports = (sequelize, DataType) => {
    const Season = sequelize.define('Season', 
    {
        id:{
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        title: DataType.STRING,

        number: DataType.INTEGER,

        release_date: DataType.DATE,

        end_date: DataType.DATE,

        serie_id: {
            type:DataType.INTEGER,
            foreignkey: true
        }
    },
    {
        tableName: 'season',
        timestamps: false
    })
    
    Season.associate = (models) => {
        Season.belongsTo(models.Serie, {
            foreignKey: 'serie_id',
            as: 'series'
        }),

        Season.hasMany(models.Episode, {
            foreignKey: 'season_id',
            as: 'episodes'
        })
    }
    return Season;
}