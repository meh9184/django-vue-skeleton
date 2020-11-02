<template>
  <v-app>
    <app-bar :color="mainColor"/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/layout/AppBar'

export default {
  name: 'App',
  components: {
    AppBar
  },
  computed: {
    mainColor: {
      get () { return this.$store.state.mainColor },
      set (v) { this.$store.commit('layout/setMainColor', v) }
    },
  }
}
</script>
