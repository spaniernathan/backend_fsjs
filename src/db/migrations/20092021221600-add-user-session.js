module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.transaction((t) => Promise.all([

    queryInterface.createTable({
      tableName: 'users',
      schema: queryInterface.sequelize.options.schema,
    }, {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      displayName: {
        type: new Sequelize.STRING(64),
        allowNull: false,
      },
      email: {
        type: new Sequelize.STRING(128),
        allowNull: false,
      },
      password: {
        type: new Sequelize.STRING(128),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }, {
      transaction: t,
    }),

    queryInterface.createTable({
      tableName: 'sessions',
      schema: queryInterface.sequelize.options.schema,
    }, {
      uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      userUuid: { type: Sequelize.UUID },
      valid: { type: Sequelize.BOOLEAN },
      userAgent: { type: Sequelize.STRING },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }, {
      transaction: t,
    }),

  ])),

  down: (queryInterface) => queryInterface.sequelize.transaction((t) => Promise.all([

    queryInterface.dropTable({
      tableName: 'users',
      schema: queryInterface.sequelize.options.schema,
    }, {
      transaction: t,
    }),
    queryInterface.dropTable({
      tableName: 'sessions',
      schema: queryInterface.sequelize.options.schema,
    }, {
      transaction: t,
    }),

  ])),
};
