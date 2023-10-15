import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'

/**
 * Registers plugins for the Vue.js app.
 * @param {Object} app - The Vue.js app instance.
 */
export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
}
