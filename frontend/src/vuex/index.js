import Vue from "vue"
import Vuex from "vuex"

import state from "./state"
import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"
// Promise imported for various browsers
import "es6-promise/auto"
import cookies from 'vue-cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
