import Vue from "vue";

import Vuex from "vuex";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { getInitialState } from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state: getInitialState()
});
