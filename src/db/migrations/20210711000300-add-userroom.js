module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([

    queryInterface.createTable({
      tableName: 'user_room',
      schema: queryInterface.sequelize.options.schema,
    }, {
      uuid: { type: Sequelize.UUID, primaryKey: true },
      userUuid: { type: Sequelize.UUID, allowNull: false },
      roomUuid: { type: Sequelize.UUID, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    }, {
      transaction: t,
    }),

  ])),

  down: (queryInterface) => queryInterface.sequelize.transaction((t) => Promise.all([

    queryInterface.dropTable({
      tableName: 'user_room',
      schema: queryInterface.sequelize.options.schema,
    }, {
      transaction: t,
    }),

  ])),
};
