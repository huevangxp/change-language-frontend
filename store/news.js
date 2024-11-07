export const state = () => ({
        newsData: [],
    });

    export const mutations = {
        SET_NEWS(state, newsData) {
            state.newsData = newsData;
        },


    }

    export const actions = {
        async getNews({ commit }, lang = 'en') {
            try {
                const { data } = await this.$axios.get(`http://localhost:9000/api/news?lang=${lang}`);
                console.log('-------------------->', data.data);
                commit('SET_NEWS', data.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        },
    }