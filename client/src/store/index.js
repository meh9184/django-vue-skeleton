import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout'

Vue.use(Vuex)

const modules = {
  layout
}

const state = {
  mainColor: 'primary'
}

const mutations = {
  setMainColor (state, mainColor) {
    state.mainColor = mainColor
  }
}

const store = new Vuex.Store({
  modules,
  state,
  mutations
})

export default store
