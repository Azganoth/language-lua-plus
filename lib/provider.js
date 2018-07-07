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
  var useLibrary = false

  // Get each library state value
  if (library == 'basic' && atom.config.get('language-lua-plus.suggestions.basic') !== false)
    useLibrary = true
  else if (atom.config.get(`language-lua-plus.suggestions.${library}`) === true)
    useLibrary = true

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

    return prefix.length >= 2 ? this.findSuggestionsForPrefix(prefix) : null
  }

  findSuggestionsForPrefix(prefix) {
    // Find matching suggestions
    const matchedSuggestions = suggestions.filter(suggestion => {
      return suggestion.replacementPrefix ? suggestion.replacementPrefix.toLowerCase().startsWith(prefix.toLowerCase())
      : suggestion.text ? suggestion.text.toLowerCase().startsWith(prefix.toLowerCase())
      : false
    })

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
