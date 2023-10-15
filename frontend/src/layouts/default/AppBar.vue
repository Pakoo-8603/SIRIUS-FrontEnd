<!--
FILEPATH: ..\FrontEnd\src\layouts\default\AppBar.vue

This component represents the default app bar layout for the Sirius application. It consists of a navigation drawer that appears when the user hovers over the app bar. The navigation drawer contains a menu component that displays the available menu items.

Props:
  None

Events:
  None

Usage:
  <AppBar />

-->
<template>
  <div @mouseover="showDrawer">
    <v-app-bar app height="160">
      <v-container>
        <v-img
          class="width-auto"
          aspect-ratio="4/3"
          height="128"
          :src="escudoImage"
        />
      </v-container>
    </v-app-bar>
  </div>
  <v-navigation-drawer
    class="bg-grey-lighten-2 mt-5"
    app
    width="450"
    floating
    v-model="drawer"
    @mouseleave="hideDrawer"
  >
    <Menu :menuItems="menuData" />
  </v-navigation-drawer>
</template>

<!--
The AppBar component is responsible for rendering the top navigation bar of the application.
It imports the Menu component and menuData from "@/components" to render the menu items.
It also imports the escudo image from "@/assets/images" to display the logo on the left side of the navigation bar.

Props:
  None

Data:
  - escudoImage: The image source for the logo.
  - menuData: The array of menu items to be rendered.
  - drawer: A boolean value to control the visibility of the menu drawer.

Methods:
  - showDrawer(): Sets the drawer property to true to show the menu drawer.
  - hideDrawer(): Sets the drawer property to false to hide the menu drawer.

Usage:
  <AppBar />
-->
<script>
import escudo from "@/assets/images/escudo-png.png";
import Menu from "@/components/Menu";
import { menuData } from "@/components/menuData.js";

export default {
  components: {
    Menu,
  },
  data() {
    return {
      escudoImage: escudo,
      menuData: menuData,
      drawer: false,
    };
  },
  methods: {
    showDrawer() {
      this.drawer = true;
    },
    hideDrawer() {
      this.drawer = false;
    },
  },
};
</script>

<style></style>
