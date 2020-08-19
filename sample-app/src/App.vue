<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-app-bar-nav-icon @click="openSideMenu"></v-app-bar-nav-icon>
      <v-tool-title>マイアドレス帳</v-tool-title>
      <v-spacer></v-spacer>

    </v-app-bar>
    <SideNav/>

    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav'
export default {
  name: 'App',
  components: {
    SideNav
  },
  data: () => ({
    //
  }),
  methods: {
    openSideMenu() {
      this.$store.dispatch('toggleSideMenu')
    }
  }
};
</script>
