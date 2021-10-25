import { createStore } from 'vuex';
import post from './modules/posts';

const store = createStore({
  modules: { post },
});

export default store;
