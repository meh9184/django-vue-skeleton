<template>
  <v-app-bar app
             dark
             :color="color"
             elevate-on-scroll>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Vue Django Skeleton</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  props: ['color']
}
</script>
