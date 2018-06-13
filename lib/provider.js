'use babel'

// Default: true
const showDescriptions = atom.config.get('language-lua-plus.showDescriptions') === false ? false : true

let suggestions = []

import snippets from '../suggestions/snippets'
import libraries from '../suggestions/libraries'

// Concatenate suggestions
for (var snippet in snippets) {
  suggestions = suggestions.concat(snippets[snippet])
}

for (var library in libraries) {
  var setting = `language-lua-plus.Suggestions.${library}`
  var settingState = false

  // Default: true
  if (library == 'basic' && atom.config.get('language-lua-plus.Suggestions.basic') !== false)
    settingState = true
  // Default: false
  else if (atom.config.get(setting) === true)
    settingState = true

  if (settingState) suggestions = suggestions.concat(libraries[library])
}

export default class SuggestionProvider {
  constructor() {
    this.selector = '.source.lua, lua'
    this.disableForSelector = '.source.lua .comment' // Autocomplete-plus don't support tree-sitter selectors yet (i think)
    this.inclusionPriority = 1
  }

  getSuggestions(options) {
    const { prefix, scopeDescriptor } = options

    return prefix.length >= 2 ? this.findSuggestionsForPrefix(prefix) : null
  }

  findSuggestionsForPrefix(prefix) {
    // Search for matching suggestions
    const matchingSuggestions = suggestions.filter(suggestion => {
      return suggestion.replacementPrefix ? suggestion.replacementPrefix.toLowerCase().startsWith(prefix.toLowerCase())
      : suggestion.text ? suggestion.text.toLowerCase().startsWith(prefix.toLowerCase())
      : false
    })

    // Create a object for all suggestions
    const matchedSuggestions = matchingSuggestions.map(suggestion => ({
      text: suggestion.text,
      snippet: suggestion.snippet,
      displayText: suggestion.replacementPrefix || suggestion.displayText,
      type: suggestion.type,
      description: showDescriptions ? suggestion.description : '',
      descriptionMoreURL: showDescriptions && suggestion.description ? 'https://www.lua.org/manual/5.3/manual.html' + suggestion.descriptionMoreURL : '',
      rightLabel: suggestion.rightLabel,
      rightLabelHTML: suggestion.rightLabelHTML,
      replacementPrefix: prefix
    }))

    return new Promise(resolve => resolve(matchedSuggestions))
  }
}
