import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  // data persistence after page refresh
  plugins: [createPersistedState()],
  state: {
    user: '',
    user_id: '',
    uroute_profile: '',
	uroute_reports: '',
    uroute_user: '',
    logged: false,
    full_uid: ''
  },

  mutations: {
    addUser(state, user) {
      state.user = user;
      state.full_uid = user.uid;
      state.user_id = user.uid.slice(0,9);
      state.uroute_profile = '/user/' + state.user_id + '/profile'
      state.uroute_reports = '/user/' + state.user_id + '/reports' 
      state.uroute_user = '/user/' + state.user_id +
      window.console.log(state.user_id)
    },

    noLogged(state) {
      state.logged = false;
    },

    logged(state) {
      state.logged = true;
    },

    resetAll(state) {
      state.user = '';
      state.user_id = '';
      state.uroute_profile = '';		
      state.uroute_reports = '';		
      state.uroute_user = '';		
      state.logged = false;
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
    uid: (state) => {
      return `${state.user_id}`;
    },
    uroute_profile: (state) => {
      return `${state.uroute_profile}`;
    },
    uroute_reports: (state) => {
        return `${state.uroute_reports}`;
    },
    uroute_user: (state) => {
      return `${state.uroute_user}`;
    },
    full_uid: (state) => {
      return `${state.full_uid}`;
    }
  }
})

export default store;
