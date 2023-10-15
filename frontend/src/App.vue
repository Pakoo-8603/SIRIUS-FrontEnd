<!--
  FILEPATH: ..\FrontEnd\src\App.vue
  DESCRIPTION: This component is the root component of the Vue.js application. It renders the main layout of the application, which includes the navigation bar, the main content area, and the footer. The component checks if the user is logged in and renders the appropriate content accordingly.
-->
<template>
  <v-app>
    <Entrada v-if="!isLoggedIn" />
    <div v-else>
      <v-main fluid>
        <v-row no-gutters>
          <v-col>
            <v-container fluid><router-view /></v-container>
          </v-col>
        </v-row>
      </v-main>
      <v-footer>
        <Footer />
      </v-footer>
    </div>
  </v-app>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import Footer from '/src/components/Footer.vue';
import Entrada from '/src/components/Entrada.vue';

const store = useStore();
const isLoggedIn = computed(() => store.state.auth.loggedIn);

onMounted(() => {
  store.dispatch('auth/checkAuthStatus');
  setInterval(() => {
    store.dispatch('auth/checkAuthStatus');
  }, 60000);
});
</script>
