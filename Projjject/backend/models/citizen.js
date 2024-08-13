"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Citizen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Citizen.init(
    {
      NationalID: { type: DataTypes.STRING, primaryKey: true },
      Name: DataTypes.STRING,
      Address: DataTypes.STRING,
      Email: DataTypes.STRING,
      password: DataTypes.STRING,
      didVoteLocal: DataTypes.BOOLEAN,
      didVoteParty: DataTypes.BOOLEAN,
      district: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Citizen",
    }
  );
  return Citizen;
};
