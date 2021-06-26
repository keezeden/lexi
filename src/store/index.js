import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  word: null
};

const mutations = {
  setWord: (state, payload) => {
    // array of strings is suggestions, array of objects is definitons
    state.definition = payload;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
