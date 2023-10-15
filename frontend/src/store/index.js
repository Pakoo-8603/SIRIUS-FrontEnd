import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';
import auth from './modules/auth'; // Asegúrate de que la ruta es correcta


/**
 * Creates a new Vuex store instance with the specified modules and plugins.
 *
 * @function
 * @name createStore
 * @param {Object} options - The options object.
 * @param {Object} options.modules - The modules object.
 * @param {Object} options.plugins - The plugins array.
 * @param {Object} options.plugins.storage - The storage object.
 * @param {Function} options.plugins.storage.getItem - The function to get an item from storage.
 * @param {Function} options.plugins.storage.setItem - The function to set an item in storage.
 * @param {Function} options.plugins.storage.removeItem - The function to remove an item from storage.
 * @returns {Object} The Vuex store instance.
 */
const store = createStore({
  modules: {
    auth
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Debes asegurarte de parsear el valor ya que las cookies guardan strings.
        setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: false }),
        removeItem: key => Cookies.remove(key)
      }
    })
  ]
});

export default store;