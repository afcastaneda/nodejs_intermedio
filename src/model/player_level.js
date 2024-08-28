module.exports = (sequelize, DataTypes) => {
    return sequelize.define('JugadorNivel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },  
          player_document: {
            type: DataTypes.STRING,
            references: {
              model: 'player',
              key: 'document'
            }
          },
          level_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'nivel',
              key: 'id'
            }
          },
          max_score: {
            type: DataTypes.INTEGER
          }
    }, {
      tableName: 'player_level',
      timestamps: true,
    });
};