module.exports = (sequelize, Sequelize, Teams) => {
  return sequelize.define('rebels', {
    id: {
      type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
    },
    name: { type: Sequelize.STRING, },
    callSign: { type: Sequelize.STRING, },
    rank: { type: Sequelize.STRING, },
  })
}
