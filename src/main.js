import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import MostRecentEntries from './components/MostRecentEntries.vue'
import MostUsefulGitCommands from './components/articles/MostUsefulGitCommands.vue'
import { SPANISH } from './components/messages/es'
import { ENGLISH } from './components/messages/en'


Vue.use(VueRouter)
Vue.use(VueI18n)

Vue.config.productionTip = false

const MESSAGES = {
  en: ENGLISH,
  es: SPANISH
}

const i18n = new VueI18n({
  locale: 'en',
  messages: MESSAGES,
})

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/', component: MostRecentEntries },
    { path: '/most-useful-git-commands', component: MostUsefulGitCommands }
  ]
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
