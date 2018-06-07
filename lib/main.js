'use babel'

import config from './config'
import suggestionProvider from './provider'

export default {
  config: config,

  provider: null,

  activate() {},

  deactivate() {
    this.provider = null
  },

  getProvider() {
    if (!this.provider) {
      this.provider = new suggestionProvider()
    }

    return this.provider
  }
}
