'use babel'

import basicDB from './database/basic'
import librariesDB from './database/libraries'

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
    let matchedSuggestions = []

    // Search for the prefix in the databases
    for (let suggestions in basicDB)
      if (atom.config.get(`language-lua-plus.snippets_basic.${suggestions}`))
        for (const suggestion of basicDB[suggestions])
          if (suggestionMatch(prefix, suggestion))
            matchedSuggestions.push(suggestion)

    for (let suggestions in librariesDB)
      if (atom.config.get(`language-lua-plus.snippets_libraries.${suggestions}`))
        for (const suggestion of librariesDB[suggestions])
          if (suggestionMatch(prefix, suggestion))
            matchedSuggestions.push(suggestion)

    // Get 'suggestion_description' configuration
    const desc = atom.config.get('language-lua-plus.suggestion_description')

    // Store matched suggestions
    const possibleSuggestions = matchedSuggestions.map(suggestion => ({
      text: suggestion.text,
      snippet: suggestion.snippet,
      displayText: suggestion.replacementPrefix || suggestion.displayText,
      type: suggestion.type,
      description: desc ? suggestion.description : '',
      descriptionMoreURL: ( desc && suggestion.description ) ? 'https://www.lua.org/manual/5.3/manual.html' + suggestion.descriptionMoreURL : '',
      rightLabel: suggestion.rightLabel,
      rightLabelHTML: suggestion.rightLabelHTML,
      replacementPrefix: prefix
    }))

    // Return matched suggestions to autocomplete-plus
    return new Promise(resolve => resolve(possibleSuggestions))
  }
}

function suggestionMatch(prefix, suggestion) {
  return suggestion.replacementPrefix ? suggestion.replacementPrefix.toLowerCase().startsWith(prefix.toLowerCase()) : suggestion.text ? suggestion.text.toLowerCase().startsWith(prefix.toLowerCase()) : false
}
