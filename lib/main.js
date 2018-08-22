'use babel'

import SuggestionProvider from './provider'

export default {
  provider: null,

  deactivate() {
    this.provider = null
  },

  getProvider() {
    if (!this.provider)
      this.provider = new SuggestionProvider()

    return this.provider
  }
}
