<template>
  <v-layout class="stretch">
    <v-card flat color="transparent" class="stretch">
      <v-row justify="center" align="center" class="stretch">
        <v-card outlined color="transparent">
          <v-card-title>
            Hello Vue Django Skeleton!
          </v-card-title>

          <v-card-text>
            {{users}}
          </v-card-text>
        </v-card>
      </v-row>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.axios.get('/users/')
      .then(res => this.users = res.data)
  },
}
</script>

<style scoped>
  @import '../style/components/home.css';
</style>
