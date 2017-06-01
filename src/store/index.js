import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
	bookList: [],
	eventItem: {},
	isLoading: false,
	blLoading: true
}
export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})