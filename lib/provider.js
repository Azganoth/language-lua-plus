'use babel'

import suggestionsLua from './suggestions/lua'
import suggestionsLuaLibraries from './suggestions/lua_libraries'

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
    const enabledSuggestions = []

    for (const [section, suggestions] of Object.entries(suggestionsLua))
      if (atom.config.get(`language-lua-plus.suggestions_lua.${section}`))
        enabledSuggestions.push(...suggestions)

    for (const [library, suggestions] of Object.entries(suggestionsLuaLibraries))
      if (atom.config.get(`language-lua-plus.suggestions_lua_libraries.${library}`))
        enabledSuggestions.push(...suggestions)

    // Fetch current config values
    const desc = atom.config.get('language-lua-plus.suggestion_description')
    const help = atom.config.get('language-lua-plus.suggestion_help')

    // Format matched suggestions
    const matchedSuggestions = search(prefix, enabledSuggestions).map(suggestion => ({
      text: suggestion.text,
      snippet: suggestion.snippet,
      displayText: suggestion.replacementPrefix || suggestion.displayText,
      type: suggestion.type,
      description: desc ? suggestion.description : null,
      descriptionMoreURL: (help && suggestion.description) ? suggestion.descriptionMoreURL : null,
      rightLabel: suggestion.rightLabel,
      rightLabelHTML: suggestion.rightLabelHTML,
      replacementPrefix: prefix
    }))

    // Return matched suggestions to autocomplete-plus
    return new Promise(resolve => resolve(matchedSuggestions))
  }
}

// Search for suggestions with the given prefix on the given suggestions
function search(prefix, suggestions) {
  return suggestions.filter(suggestion => suggestion.replacementPrefix
    ? suggestion.replacementPrefix.toLowerCase().startsWith(prefix.toLowerCase())
    : suggestion.text
      ? suggestion.text.toLowerCase().startsWith(prefix.toLowerCase())
      : false)
}
