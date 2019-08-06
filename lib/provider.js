'use babel'

import basic from './database/basic'
import libraries from './database/libraries'

export default class SuggestionsProvider {
  constructor() {
    this.selector = '.source.lua'
    this.disableForSelector = '.source.lua .comment'
    this.inclusionPriority = 1
  }

  getSuggestions({ prefix }) {
    return prefix.length >= 2 ? this.findSuggestionsForPrefix(prefix) : null
  }

  findSuggestionsForPrefix(prefix) {
    const database = []

    for (const [section, snippets] of Object.entries(basic))
      if (atom.config.get(`language-lua-plus.snippets_basic.${section}`))
        database.push(...snippets)

    for (const [library, snippets] of Object.entries(libraries))
      if (atom.config.get(`language-lua-plus.snippets_libraries.${library}`))
        database.push(...snippets)

    // Fetch current options values
    const desc = atom.config.get('language-lua-plus.suggestion_description')

    // Format matched suggestions
    const suggestions = search(prefix, database).map(suggestion => ({
      text: suggestion.text,
      snippet: suggestion.snippet,
      displayText: suggestion.replacementPrefix || suggestion.displayText,
      type: suggestion.type,
      description: desc ? suggestion.description : null,
      descriptionMoreURL: (desc && suggestion.description) ? 'https://www.lua.org/manual/5.3/manual.html' + suggestion.descriptionMoreURL : null,
      rightLabel: suggestion.rightLabel,
      rightLabelHTML: suggestion.rightLabelHTML,
      replacementPrefix: prefix
    }))

    // Return matched suggestions to autocomplete-plus
    return new Promise(resolve => resolve(suggestions))
  }
}

// Search for suggestions with the given prefix on the given data
function search(prefix, data) {
  return data.filter(suggestion => suggestion.replacementPrefix
    ? suggestion.replacementPrefix.toLowerCase().startsWith(prefix.toLowerCase())
    : suggestion.text
      ? suggestion.text.toLowerCase().startsWith(prefix.toLowerCase())
      : false)
}
