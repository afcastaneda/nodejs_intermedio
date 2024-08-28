module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Player',{
        document: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:'email'
        }
    },{
        tableName: 'player',
        timestamps: true,
    });
}