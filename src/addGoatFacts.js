/**
 * addGoatFacts - Adds the passed in goat facts to the Dom
 */
export const addGoatFacts = (facts = []) => {
  var factList = document.getElementById('goat-facts-list')

  // Remove the all children elements from the UL.
  while (factList.firstChild)
  {
    factList.removeChild(factList.firstChild)
  }

  // Add in the facts to the ul with the proper classing for display purposes.
  for (var idx = 0; idx < facts.length; ++idx)
  {
    var factNode = document.createTextNode(facts[idx])
    var liNode = document.createElement('li')
    liNode.classList.add('list-group-item')

    liNode.appendChild(factNode)
    factList.appendChild(liNode)
  }
}
