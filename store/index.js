import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		//切换的footer index
		footerIndex: 0
	},
    mutations: {
		SET_FOOTERINDEX(state, val){
			state.footerIndex = val 
		}
	},
    actions: {},
	modules: {
	 //    zjzprint: zjzprint,
	 //    home: home,
		// selfprint:selfprint
	}
})
export default store