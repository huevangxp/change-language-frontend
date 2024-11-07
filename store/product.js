export const state = () => ({
    news: [],
  });

  export const mutations = {
    SET_NEWS(state, news) {
      state.news = news;
    },
  };

  export const actions = {
    async getProducts({ commit }, lang = 'en') {
      try {
        const { data } = await this.$axios.get(`http://localhost:9000/api/products?lang=${lang}`);
        console.log('-------------------->',data);
        commit('SET_NEWS', data.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    },
  };