const goatsApi = require('./goats')
const rootApi = require('./root')

// Register each router by priority, first matching route wins

// JTE NOTE: 2021-11-22 ::
// Flipped the order below.The root was before goats, so it was catching all API web requests.
// This ordering issue prevented the goats API end point from ever being reached.
module.exports = (app, config) => {
  goatsApi(app, config)
  rootApi(app, config)
}
