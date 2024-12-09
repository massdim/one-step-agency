"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Talents_Images", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TalentId: {
        type: Sequelize.INTEGER,
      },
      fileName: {
        type: Sequelize.STRING,
      },
      fileSize: {
        type: Sequelize.INTEGER,
      },
      fileType: {
        type: Sequelize.STRING,
      },
      primary: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Talents_Images");
  },
};
