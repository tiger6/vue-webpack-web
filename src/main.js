// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './common/axios'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import FastClick from 'fastclick'
import i18n from './locales'

Vue.config.productionTip = false
Vue.prototype.$http = Axios //ajax全局设置
Vue.use(Element)

/*fastclick 设置*/
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	i18n,
	template: '<App/>',
	components: {
		App
	}
})