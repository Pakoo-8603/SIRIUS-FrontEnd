<!--
  FILEPATH: ..\FrontEnd\src\components\Menu.vue
  DESCRIPTION: This component displays a menu with a list of items and sub-items. It receives an array of menu items as a prop and recursively renders them.
-->
<template>
  <div>
    <v-list nav density="compact">
      <template v-for="(item, index) in menuItems" :key="index">
        <v-list-item
          v-if="!item.items"
          :title="item.title"
          :prepend-icon="item.icon"
          @click="navigateTo(item.url)"
        ></v-list-item>
        <v-list-group v-else fluid @click.prevent>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              v-if="item.url"
              :prepend-icon="item.icon"
              @click.stop="navigateTo(item.url)"
            >
              <span class="menu-link">
                {{ item.title }}
              </span>
            </v-list-item>
            <v-list-item
              v-bind="props"
              v-else
              :title="item.title"
              :prepend-icon="item.icon"
              @click="navigateTo(item.url)"
            >
            </v-list-item>
          </template>
          <Menu :menuItems="item.items" />
        </v-list-group>

        <v-divider></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
/**
 * Menu component that displays a list of menu items and allows the user to navigate to different pages.
 * @name Menu
 * @component
 * @props {Array} menuItems - An array of menu items to display.
 */
export default {
  name: "Menu",
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    /**
     * Navigates to the specified URL using Vue Router.
     * @param {string} url - The URL to navigate to.
     */
    navigateTo(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style scoped>
.menu-link {
  color: black;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 1rem;
}
</style>
