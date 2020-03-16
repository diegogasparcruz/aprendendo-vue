import Vue from 'vue'
import App from './App.vue'

import store from './store/store'
import router from './router'

import './plugins/vuetify'
import './plugins/axios'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
