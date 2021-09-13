<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-main>
      <Sidebar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',

  computed:{
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  },

  components: {Sidebar},

};
</script>
