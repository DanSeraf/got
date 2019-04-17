import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  // data persistence after page refresh
  plugins: [createPersistedState()],
  state: {
    user: '',
    username:'',
    logged: false,
    posted: false
  },

  mutations: {
    addUser(state, user) {
      state.user = user;
    },

    addUsername(state, username){
      state.username= username;
    },

    addStatus(state, posted) {
      state.posted = posted;
    },

    noLogged(state) {
      state.logged = false;
    },

    logged(state) {
      state.logged = true;
    },

    resetAll(state) {
      state.user = '';
      state.logged = false;
      state.username = '';
      state.posted = false;
    }
  },

  actions: {
    resetUserStore(store) {
      store.commit('resetAll')
    }
  },

  getters: {
    user: (state) => {
      return `${state.user}`;
    },
    username: (state) => {
      return `${state.username}`;
    },
    logged: (state) => {
      return `${state.logged}`;
    },
    posted: (state) => {
      return `${state.posted}`;
    },
  }
})

export default store;
