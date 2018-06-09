'use babel'

import config from './config'
import SuggestionProvider from './provider'

export default {
  config: config,

  provider: null,

  activate() {},

  deactivate() {
    this.provider = null
  },

  getProvider() {
    if (!this.provider) {
      this.provider = new SuggestionProvider()
    }

    return this.provider
  }
}
