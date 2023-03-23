'use strict';
import {Model} from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Typing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Typing.init({
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
    score: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    wpm: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    accuracy: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Typing',
  });
  return Typing;
};