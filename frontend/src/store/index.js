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
    posted: false,
    access_type: '',
    email: ''
  },

  mutations: {
    addUser(state, user) {
      state.user = user;
    },

    addEmail(state, email){
      state.email = email
    },

    addUsername(state, username){
      state.username= username;
    },

    addStatus(state, posted) {
      state.posted = posted;
    },

    addAccessType(state, type){
      state.access_type = type;
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
      state.email = '';
    }
  },

  actions: {
    resetUserStore(store) {
      store.commit('resetAll')
    }
  },

  getters: {
    email: (state) => {
      return `${state.email}`;
    },
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
