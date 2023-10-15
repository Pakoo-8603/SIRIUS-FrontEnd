import axios from 'axios';

/**
 * State object.
 */
const state = {
    loggedIn: false,
    loggedInResumen: false,
    user: null,
    token: null,
    level: null,
    expireTime: null,
    showDialog: false
};

/**
 * Mutations object.
 */
const mutations = {
    SET_LOGGED_IN(state, value) {
        state.loggedIn = value;
    },
    SET_LOGGED_IN_RESUMEN(state, value) {
        state.loggedInResumen = value;
    },
    SET_USER(state, user) {
        state.user = user;
    },
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_LEVEL(state, level) {
        state.level = level;
    },
    SET_EXPIRE_TIME(state, time) {
        state.expireTime = time;
    },
    SET_SHOW_DIALOG(state, value) {
        state.showDialog = value;
    }
};

/**
 * Actions object.
 */
const actions = {
    async logIn({ commit }, { Usuario, Password }) {
        try {
            const response = await axios.post('/api/auth/login', {
                Usuario: Usuario,
                Password: Password
            });

            if (response.data && response.data.body.token && response.data.body.level) {
                const token = response.data.body.token;
                const level = response.data.body.level;
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                axios.defaults.headers.common['authLevel'] = level;
                const now = new Date();
                now.setHours(now.getHours() + 1); // Ejemplo de configuración de expiración de la sesión en 1 hora
                //now.setMinutes(now.getMinutes() + 2); // 1 minuto para pruebas
                commit('SET_EXPIRE_TIME', now);
                commit('SET_LOGGED_IN', true);
                commit('SET_LOGGED_IN_RESUMEN', true);
                commit('SET_USER', response.data.user);
                commit('SET_TOKEN', token);
                commit('SET_LEVEL', level);
            } else {
                throw new Error('Error during login.');
            }
        } catch (error) {
            console.error("There was an error logging in:", error);
        }
    },

    logOut({ commit }) {
        commit('SET_SHOW_DIALOG', false);
        delete axios.defaults.headers.common['Authorization'];
        delete axios.defaults.headers.common['authLevel'];
        commit('SET_LOGGED_IN', false);
        commit('SET_LOGGED_IN_RESUMEN', false);
        commit('SET_USER', null);
        commit('SET_TOKEN', null);
        commit('SET_LEVEL', null);
        commit('SET_EXPIRE_TIME', null);
    },

    checkAuthStatus({ commit, state, dispatch }) {
        const token = state.token;
        const level = state.level;
        const now = new Date();
        if (token && (!state.expireTime || now < new Date(state.expireTime))) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.defaults.headers.common['authLevel'] = level;
            // Definir usuario según el nivel
            if (level === '1') {
                commit('SET_USER', 'Admin');
            } else if (level === '2') {
                commit('SET_USER', 'Revisor');
            } else if (level === '3') {
                commit('SET_USER', 'Coordinador');
            } else if (level === '4') {
                commit('SET_USER', 'Usuario');
            }
            commit('SET_LOGGED_IN', true);
            commit('SET_LOGGED_IN_RESUMEN', true);
            const expiresIn = new Date(state.expireTime) - now - (1 * 60 * 1000); // 1 minuto antes
            setTimeout(() => {
                // Muestra el diálogo al usuario
                commit('SET_SHOW_DIALOG', true);
                // Configura otro temporizador para cerrar la sesión si el usuario no responde
                setTimeout(() => {
                    if (state.showDialog) {
                        dispatch('logOut');
                    }
                }, 1 * 60 * 1000); // 1 minuto después
            }, expiresIn);
        }
    },

    stayConnected({ commit }) {
        // Renueva el token y oculta el diálogo
        commit('SET_SHOW_DIALOG', false);
        const now = new Date();
        now.setHours(now.getHours() + 1); // Ejemplo de configuración de expiración de la sesión en 1 hora
        //now.setMinutes(now.getMinutes() + 2); // 1 minuto para pruebas
    },
};

/**
 * Getters object.
 */
const getters = {
    /**
     * isLoggedIn
     * 
     * This method is used to check if a user is logged in.
     * 
     * @param {Object} state - The state object containing the user's login status.
     * @returns {boolean} - Returns true if the user is logged in, otherwise false.
     */
    isLoggedIn: (state) => state.loggedIn,
    /**
     * isLoggedInResumen
     * 
     * This method is used to retrieve the value of the loggedInResumen property from the state object.
     * 
     * @param {Object} state - The state object containing the loggedInResumen property.
     * @returns {boolean} - The value of the loggedInResumen property.
     */
    isLoggedInResumen: (state) => state.loggedInResumen,
    /**
     * Retrieves the current user from the state.
     *
     * @param {Object} state - The state object containing user information.
     * @returns {Object} - The current user object.
     */
    currentUser: (state) => state.user,
    /**
     * Returns the authentication token from the state object.
     *
     * @param {Object} state - The state object containing the token.
     * @returns {string} - The authentication token.
     */
    authToken: (state) => state.token,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};