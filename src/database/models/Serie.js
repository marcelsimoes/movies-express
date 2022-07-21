
module.exports = (sequelize, DataType) => {
    const Serie = sequelize.define('Serie', 
    {
        id:{
            type: DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        title: DataType.STRING,

        release_date: DataType.DATE,

        end_date: DataType.DATE,

        genre_id: {
            type: DataType.INTEGER,
            foreignkey: true,
            allowNull: true
        }
    },
    {
        tableName: 'series',
        timestamps: false
    })
    
    Serie.associate = (models) => {
        Serie.belongsTo(models.Genre, {
            foreignKey: 'genre_id',
            as: 'genres'
        }),
        
        Serie.hasMany(models.Season, {
            foreignKey: 'serie_id',
            as: 'series'
        })
    }
    return Serie;
}