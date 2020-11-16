import Vue from "vue"

const state = {
  token: '',
  user: {},
  isSignedIn: false
}

const mutations = {
  setToken (state, v) {
    state.token = v
  },
  setUser (state, v) {
    state.user = v
  },
  setIsSignedIn (state, v) {
    state.isSignedIn = v
  }
}

const actions = {
  signIn,
  signOut
}

function signIn ({ commit }, params) {
  Vue.axios.post('/tokens/', params)
    .then(res => {
      Vue.prototype.$cookies.set('token', res.data.token, '9H', '/')

      commit('setToken', res.data.token)
      commit('setUser', res.data.user)
      commit('setIsSignedIn', true)
    })
}

function signOut ({ commit }) {
  Vue.prototype.$cookies.remove('token')

  commit('setToken', '')
  commit('setUser', {})
  commit('setSignedIn', false)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
