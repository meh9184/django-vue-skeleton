<template>
  <v-layout class="stretch">

    <v-card flat color="transparent" class="stretch">
      <v-row justify="center" align="center">
        <v-card outlined color="transparent">
          <v-card-title>
            Hello Vue Django Skeleton!
          </v-card-title>

          <v-row justify="center" align="center" class="stretch">
            <v-btn @click="signIn" color="primary" class="ma-3"> 로그인 </v-btn>
            <v-btn @click="signOut" color="primary" class="ma-3"> 로그아웃 </v-btn>
          </v-row>

        </v-card>
      </v-row>

      <v-row justify="center" align="center">
        {{user}}
      </v-row>
    </v-card>


  </v-layout>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    signIn,
    signOut
  }
}

function signIn () {
  const params = {
    email: 'meh9184@naver.com',
    password: '*ansdmsghks9184'
  }

  this.$store.dispatch('auth/signIn', params)
}

function signOut () {
  this.$store.dispatch('auth/signOut')
}

</script>

<style scoped>
  @import '../style/components/home.css';
</style>
