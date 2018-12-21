'use babel'

import SuggestionsProvider from './provider'

export default {
  provider: null,

  deactivate() {
    this.provider = null
  },

  getProvider() {
    if (!this.provider)
      this.provider = new SuggestionsProvider()

    return this.provider
  }
}
