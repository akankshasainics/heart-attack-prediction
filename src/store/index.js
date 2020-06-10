import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    arr: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    result: '',
    tried: false,
  },
  mutations: {
    changeValue(state, payload){
        state.arr[payload.index] = payload.value
        console.log(state.arr)
    },
    setResult(state, val){
        state.result = val
    },
    isTried(state, val){
      state.tried = val
    },
  },
  actions: {},
  modules: {}
});
