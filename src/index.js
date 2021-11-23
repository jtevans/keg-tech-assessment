import './styles/style.css'
import './styles/bootstrap.min.css'
import { getGoatFacts } from './getGoatFacts'
import { addGoatFacts } from './addGoatFacts'
import { filterGoatFacts } from './filterGoatFacts'

/**
 * onGetGoatFacts - Action to update the goat facts displayed on the Dom
 */
const onGetGoatFacts = async () => {
  const facts = await getGoatFacts()

  const filteredFacts = filterGoatFacts(facts)

  addGoatFacts(filteredFacts)
}

;(async () => {
  await onGetGoatFacts()
})()

// Make the get-goat-facts button to reload our goat facts.
const goatFactsButton = document.getElementById('get-goat-facts')
goatFactsButton.addEventListener("click", function () { onGetGoatFacts(); }, false)
