module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([

    queryInterface.createTable({
      tableName: 'rooms',
      schema: queryInterface.sequelize.options.schema,
    }, {
      uuid: { type: Sequelize.UUID, primaryKey: true },
      ownerUuid: { type: Sequelize.UUID, allowNull: false },
      roomName: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    }, {
      transaction: t,
    }),

    queryInterface.createTable({
      tableName: 'messages',
      schema: queryInterface.sequelize.options.schema,
    }, {
      uuid: { type: Sequelize.UUID, primaryKey: true },
      value: { type: Sequelize.STRING, allowNull: false },
      senderName: { type: Sequelize.STRING, allowNull: false },
      ownerUuid: { type: Sequelize.UUID, allowNull: false },
      roomUuid: { type: Sequelize.UUID, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    }, {
      transaction: t,
    }),

  ])),

  down: (queryInterface) => queryInterface.sequelize.transaction((t) => Promise.all([

    queryInterface.dropTable({
      tableName: 'rooms',
      schema: queryInterface.sequelize.options.schema,
    }, {
      transaction: t,
    }),
    queryInterface.dropTable({
      tableName: 'messages',
      schema: queryInterface.sequelize.options.schema,
    }, {
      transaction: t,
    }),

  ])),
};
