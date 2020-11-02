import Vue from "vue"

const state = {
  user: {},
  signedIn: false
}

const mutations = {
  setUser (state, v) {
    state.user = v
  },
  setSignedIn (state, v) {
    state.signedIn = v
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

      commit('setUser', res.data.user)
      commit('setSignedIn', true)
    })
}

function signOut ({ commit }) {
  Vue.prototype.$cookies.remove('token')

  commit('setUser', {})
  commit('setSignedIn', false)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
