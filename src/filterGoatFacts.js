/**
 * filterGoatFacts - Filters goat facts based on word and index
 */

export const filterGoatFacts = facts => {
  var word = String(document.getElementById('word').value)
  var number = parseInt(document.getElementById('number').value)
  var wordParts = word.split(/(\s+)/)

  if (word == "" || number == "" || wordParts.length > 1 || number === NaN)
  {
    return facts
  }

  var filteredFacts = []
  const wordPattern = new RegExp(word, 'i')

  for (var idx = 0; idx < facts.length; ++idx)
  {
    var factsParts = facts[idx].split(/\s+/)

    if (wordPattern.test(factsParts[number - 1]))
    {
      continue
    }

    filteredFacts.push(facts[idx])
  }

  return filteredFacts
}
