module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Nivel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
      tableName: 'level',
      timestamps: true,
    });
};