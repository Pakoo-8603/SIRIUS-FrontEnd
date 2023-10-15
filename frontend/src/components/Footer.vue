<!-- FILEPATH: ..\FrontEnd\src\components\Footer.vue -->

<!--
The Footer component displays the footer section of the web page. It contains the copyright 
information and social media icons.

Props:
None

Events:
None

Slots:
None

Usage:
<Footer />

-->

<template>
  <div class="footer d-flex w-100 px-4">
    <strong
      >©2023 División de Ingenierías, Campus Irapuato-Salamanca, Universidad de
      Guanajuato.</strong
    >
    <v-spacer></v-spacer>

    <a
      v-for="icon in icons"
      :key="icon"
      :href="getSocialLink(icon)"
      class="mx-4 icon-link"
      target="_blank"
    >
      <v-icon :color="iconColor" large>{{ icon }}</v-icon>
    </a>
  </div>
</template>

<!-- FILEPATH: ..\FrontEnd\src\components\Footer.vue -->

<!--
  Component for the footer section of the website.
  Contains social media icons with links to the university's profiles.
-->

<script>
export default {
  data: () => ({
    // Array of social media icons to display
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-instagram",
      "mdi-youtube",
      "mdi-linkedin",
    ],
    // Color of the icons
    iconColor: "white",
  }),
  methods: {
    /**
     * Returns the social media link for a given icon.
     * @param {string} icon - The name of the social media icon.
     * @returns {string} - The link to the university's profile on the given social media platform.
     */
    getSocialLink(icon) {
      switch (icon) {
        case "mdi-facebook":
          return "https://www.facebook.com/UdeGuanajuato/";
        case "mdi-twitter":
          return "https://twitter.com/UdeGuanajuato";
        case "mdi-linkedin":
          return "https://www.linkedin.com/school/universidad-de-guanajuato/";
        case "mdi-instagram":
          return "https://www.instagram.com/udeguanajuato/";
        case "mdi-youtube":
          return "https://www.youtube.com/channel/UCoUQ-zFpkGpLo4Yqj1PLFDA";
        default:
          return "#";
      }
    },
  },
};
</script>

<style scoped>
.footer {
  align-items: center;
  justify-content: space-between;
  display: block;
  position: relative;
  background: #07203e;
  color: #ffffff;
  padding: 35px 70px;
}

.icon-link {
  color: white;
  transition: transform 0.2s;
}

.icon-link:hover {
  transform: scale(2);
}
</style>
