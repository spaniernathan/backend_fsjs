module.exports = {
  up: (queryInterface) => queryInterface.sequelize.transaction((t) => Promise.all([

    queryInterface.createSchema(process.env.DATABASE_SCHEMA, {
      transaction: t,
    }),

  ])),

  down: (queryInterface) => queryInterface.sequelize.transaction((t) => Promise.all([

    queryInterface.dropSchema(process.env.DATABASE_SCHEMA, {
      transaction: t,
    }),

  ])),
};
