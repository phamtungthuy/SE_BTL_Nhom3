'use strict';
import {Model} from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Record.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    paragraph_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    typing_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_score: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    time_start: {
      type: DataTypes.TIME,
      allowNull: true
    },
    time_finish: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Record',
  });
  return Record;
};