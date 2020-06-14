import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '@/services/UserService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeChannel: {},
    user: {},
    cambio: false
  },
  mutations: {
    addUserInfo(state, { user }) {
      state.user = user;
    },
    addActiveChannel(state, { channel }) {
      state.activeChannel = channel;
    },
    removeActiveChannel(state) {
      state.activeChannel = {};
    },
    turnCambioOn(state) {
      state.cambio = true;
    },
    turnCambioOff(state) {
      state.cambio = true;
    },
  },
  actions: {
    loadUserInfo(context, { token }) {

      return UserService
        .getUserInfo(token)
        .then(user => {
          context.commit('addUserInfo', { user })
        });
    }
  },
  modules: {
  }
})
