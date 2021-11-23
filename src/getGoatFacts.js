/**
 * getGoatFacts - Gets a list of goat facts from the backend API
 */
export const getGoatFacts = async () => {
  const axios = require('axios')
  const url = 'http://www.kilnar.com:5005/goats'
  var goatFacts = []
  await axios.get(url)
    .then(resp => {
      goatFacts = resp.data.data
    })

  return goatFacts
}
