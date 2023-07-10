import { createStore } from "vuex";

export default createStore({
  state: {
    is_grey: false,
  },
  getters: {
    is_grey(state) {
      return state.is_grey;
    },
  },
  mutations: {
    toggle_grey(state) {
      state.is_grey = !state.is_grey;
    },
  },
  actions: {
    toggleDrawer(context) {
      context.commit("toggle_grey");
    },
  },
  modules: {},
});
