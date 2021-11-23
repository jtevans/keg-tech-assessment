const { uuid } = require('@keg-hub/jsutils')

// Changed the web port to 5004 because of conflict with existing service on port 3000 on my laptop and my server.
module.exports = {
  api: {
    origins: ['http://localhost:5004', 'http://www.kilnar.com:5004'],
    port: 5005,
    host: 'www.kilnar.com',
    uuid: uuid(),
  },
  web: {
    port: 5004,
    host: 'www.kilnar.com',
  },
}
