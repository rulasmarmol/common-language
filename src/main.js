import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MostRecentEntries from './components/MostRecentEntries.vue'
import MostUsefulGitCommands from './components/articles/MostUsefulGitCommands.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/', component: MostRecentEntries },
    { path: '/most-useful-git-commands', component: MostUsefulGitCommands }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
