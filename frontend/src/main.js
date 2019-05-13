import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import App from './App.vue'
import store from './store/index.js'
import * as firebase from "firebase/app"
import  "firebase/auth"



Vue.config.productionTip = false

let app = '';

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
});

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            store,
            router,
            render: h => h(App)
        }).$mount('#app')
    }
})

