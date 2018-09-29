'use babel'

import basic from './database/basic'
import libraries from './database/libraries'

export default class SuggestionProvider {
  constructor() {
    this.selector = '.source.lua'
    this.disableForSelector = '.source.lua .comment'
    this.inclusionPriority = 1
  }

  getSuggestions(options) {
    const { prefix, scopeDescriptor } = options
    
    return prefix.length >= 2 ? this.findSuggestionsForPrefix(prefix, scopeDescriptor) : null
  }

  findSuggestionsForPrefix(prefix, scopeDescriptor) {
    // Searching for a matching suggestion
    let matchedSuggestions = []

    // Search in basic database
    for (let suggestions in basic)
      if (atom.config.get(`language-lua-plus.snippets_basic.${suggestions}`))
        for (const suggestion of basic[suggestions])
          if (suggestionMatch(prefix, suggestion))
            matchedSuggestions.push(suggestion)

    // Search in libraries database
    for (let suggestions in libraries)
      if (atom.config.get(`language-lua-plus.snippets_libraries.${suggestions}`))
        for (const suggestion of libraries[suggestions])
          if (suggestionMatch(prefix, suggestion))
            matchedSuggestions.push(suggestion)

    // Get 'suggestion_description' configuration
    const desc = atom.config.get('language-lua-plus.suggestion_description')

    // Create an object for matched suggestions
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

    return new Promise(resolve => resolve(possibleSuggestions))
  }
}

function suggestionMatch(prefix, suggestion) {
  return suggestion.replacementPrefix ? suggestion.replacementPrefix.toLowerCase().startsWith(prefix.toLowerCase())
  : suggestion.text ? suggestion.text.toLowerCase().startsWith(prefix.toLowerCase())
  : false
}
