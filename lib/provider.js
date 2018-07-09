'use babel'

// Import Lua snippets and library suggestions
import snippets from '../suggestions/snippets'
import libraries from '../suggestions/libraries'

let suggestions = []

// Concatenating suggestions
for (var snippet in snippets) {
  suggestions = suggestions.concat(snippets[snippet])
}

for (var library in libraries) {
  // Get each library state value (Default: false)
  var useLibrary = atom.config.get(`language-lua-plus.suggestions_lua_libraries.${library}`) === true ? true : false

  if (useLibrary) suggestions = suggestions.concat(libraries[library])
}

// Get 'show_descriptions' state value (Default: true)
const showDescriptions = atom.config.get('language-lua-plus.show_descriptions') === false ? false : true

export default class SuggestionProvider {
  constructor() {
    this.selector = 'lua program, .source.lua'
    this.disableForSelector = 'lua program comment, .source.lua .comment'
    this.inclusionPriority = 1
  }

  getSuggestions(options) {
    const { prefix } = options

    return prefix.length >= 2 ? this.findSuggestionsForPrefix(prefix, scopeDescriptor) : null
  }

  findSuggestionsForPrefix(prefix, scopeDescriptor) {
    // Find matching suggestions
    let matchedSuggestions = suggestions.filter(suggestion => suggestionMatch(prefix, suggestion))

    // Create a object for all suggestions
    const possibleSuggestions = matchedSuggestions.map(suggestion => ({
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

    return new Promise(resolve => resolve(possibleSuggestions))
  }
}

function suggestionMatch(prefix, suggestion) {
  return suggestion.replacementPrefix ? suggestion.replacementPrefix.toLowerCase().startsWith(prefix.toLowerCase())
  : suggestion.text ? suggestion.text.toLowerCase().startsWith(prefix.toLowerCase())
  : false
}
