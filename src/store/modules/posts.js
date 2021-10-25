export default {
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
    allPostsCount(_, getters) {
      return getters.allPosts.length;
    },
  },
  actions: {
    // Вместо ctx деструктурируем commit, getters, dispatch
    getPosts({ commit }) {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];

      commit('updatePosts', posts);
    },
    setPosts({ getters }) {
      localStorage.setItem('posts', JSON.stringify(getters.allPosts));
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    createPost(state, newPost) {
      state.posts.push(newPost);
    },
    deletePost(state, postId) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },
};
