import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VueRouter);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex' ,// The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
});



const store = new Vuex.Store({
  state : {
    msg: 'Welcome to Bookshelf',
    username: '',
    user_id: '',
    name : '',
    password : '',
    apitoken : '',
    signInDone : false,
    signInFailed : false,
    signInFailedMessage : '',
    loginDone : false,
    bookshelf_id : ''
  },
  mutations : {
    setUsername(state,value){
      state.username = value;
    },
    setUserId(state,value){
      state.user_id = value;
    },
    setName(state,value){
      state.name = value;
    },
    setPassword(state,value){
      state.password = value;
    },
    setApitoken(state,value){
      state.apitoken = value;
    },
    switchSignInDone(state,value){
      state.signInDone = true;
    },
    switchSignInFailed(state,value){
      state.signInFailed = true;
    },
    switchLoginDone(state,value){
      state.loginDone = true;
    },
    setBookshelfId(state,value){
      state.bookshelf_id = value;
    }
  },
  plugins: [vuexLocalStorage.plugin]
});

const router = new  VueRouter({ // step 2: configure the plugin with the constant
  routes,
  mode : 'history' // sets the url routes to work without the hash eg. domainname/user instead of domainname/#/user
});

new Vue({
 el: '#app',

  router:router,
  store:store,

  render: h => h(App)
});
