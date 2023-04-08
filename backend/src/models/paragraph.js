'use strict';
import {Model} from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Paragraph extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Paragraph.belongsTo(models.Typing, { foreignKey: 'paragraph_id' });
    }
  }
  Paragraph.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    language: {
      type: DataTypes.STRING,
      defaultValue: 'English',
      allowNull: false
    },
    is_test: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Paragraph',
  });
  return Paragraph;
};