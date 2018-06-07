'use babel'

let suggestions = []

import common from '../suggestions/common'
import libraries from '../suggestions/libraries'

for (var construct in common) {
  suggestions = suggestions.concat(common[construct])
}

export default class suggestionProvider {
  constructor() {
    this.selector = '.source.lua, lua'
    this.disableForSelector = '.source.lua .comment' // Autocomplete-plus don't support tree-sitter yet
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
      description: suggestion.description,
      descriptionMoreURL: 'https://www.lua.org/manual/5.3/manual.html' + suggestion.descriptionMoreURL,
      leftLabel: suggestion.leftLabel,
      rightLabel: suggestion.rightLabel,
      replacementPrefix: prefix
    }))

    return new Promise(resolve => resolve(matchedSuggestions))
  }
}
