import 'vuetify/styles'
import { createApp } from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie';

import App from './App.vue';
import { registerPlugins } from '@/plugins';
import store from './store';

// Configura axios para que use la URL base de la API
axios.defaults.baseURL = 'http://host.docker.internal:4000';  

// Interceptor para incluir el token en las cabeceras de las solicitudes
axios.interceptors.request.use((config) => {
    const token = Cookies.get('authToken'); // Obtener el token de las cookies
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

const app = createApp(App);
app.use(store);
registerPlugins(app);

app.mount('#app');
