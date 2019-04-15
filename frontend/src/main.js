import Vue from 'vue'
import firebase from 'firebase'
import './plugins/vuetify'
import router from './router'
import App from './App.vue'
import store from './store/index.js'

Vue.config.productionTip = false

let app = '';

firebase.initializeApp({
    apiKey: "AIzaSyD6CFDQRzrB9knEalmjvW_AKPbNJkqPZYA",
    authDomain: "client-e06e0.firebaseapp.com",
    databaseURL: "https://client-e06e0.firebaseio.com",
    projectId: "client-e06e0",
    storageBucket: "",
    messagingSenderId: "15110347449",
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

