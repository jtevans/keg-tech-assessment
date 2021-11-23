const { doIt } = require('@keg-hub/jsutils')
const mysql = require('mysql')
// eslint-disable-next-line no-unused-vars
// const factList = require('./goatFacts.json')


// JTE :: Using basic, standard randomization method here to fetch a random fact from the factList.
const getRandomFact = (factList) => {
  return factList[Math.floor(Math.random() * factList.length)]
}

function getFactsFromDB() {
  return new Promise((resolve, reject) => {

    var db = mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: 'goat',
      password: '6dJF9sgXzQ8jLGlJ',
      database: 'goat'
    })

    db.connect(function (error) {
      if (error) {
        reject(error)
      }
    })

    db.query('SELECT fact FROM facts', function (error, results, fields) {
      if (error) {
        db.end()
        reject(err)
      }

      db.end()
      resolve(results)
    });
  });
}

const goatFacts = async () => {
  var factList = []

  // Go fetch all facts from database. MySQL does not have a "random row" function, so I get all of them.
  // If this were a Large Dataset, I would probably tackle the "random row" functionality in a stored procedure on the server itself for greater efficiency
  factListresults = await getFactsFromDB();
  for (var idx = 0; idx < factListresults.length; ++idx) {
    factList.push(factListresults[idx].fact)
  }

  // Get 20 facts at random
  return doIt(20, global, () => getRandomFact(factList))
}

module.exports = {
  goatFacts,
}
