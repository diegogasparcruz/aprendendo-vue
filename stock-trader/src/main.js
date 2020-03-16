import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import store from './store/store'
import router from './router'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
