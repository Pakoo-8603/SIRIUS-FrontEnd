<template>
  <div v-if="value">
    <v-card loading variant="tonal">
      <v-card-title class="headline"
        >¿Deseas permanecer conectado?</v-card-title
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          fluid
          prepend-icon="mdi-check-circle"
          rounded="lg"
          type="submit"
          variant="tonal"
          size="large"
          color="green darken-1"
          text
          @click="stayConnected"
          >Sí</v-btn
        >
        <v-btn
          fluid
          prepend-icon="mdi-close"
          rounded="lg"
          variant="tonal"
          size="large"
          color="red-darken-4"
          text
          @click="logOut"
          >No</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    stayConnected() {
      this.$store.dispatch("auth/stayConnected");
      this.$emit("update:value", false);
    },
    logOut() {
      this.$store.dispatch("auth/logOut");
      this.$emit("update:value", false);
    },
  },
};
</script>
