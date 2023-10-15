<!--
FILEPATH: ..\FrontEnd\src\layouts\default\Default.vue

This Vue component is the default layout for the application. It contains a v-app component that wraps the entire layout. The layout consists of two child components: DefaultBar and DefaultView.

DefaultBar is responsible for rendering the application bar, while DefaultView is responsible for rendering the main content of the application.

Props:
  None

Events:
  None

Usage:
  <template>
    <default-layout />
  </template>

Author:
  Your Name
-->
<template>
  <v-app>
    <default-bar />
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
