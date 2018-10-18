import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import mutations from './mutations'
import defaultState from './state'
import getters from './getters'


export default new Vuex.Store({state: defaultState,mutations,getters});


