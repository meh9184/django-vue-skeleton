const state = {
  drawer: true
}

const mutations = {
  setDrawer (state, drawer) {
    state.drawer = drawer
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
