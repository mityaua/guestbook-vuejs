import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});

export default store;
