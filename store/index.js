// store/index.js
export const state = () => ({
 
  translationObj: []
});

export const mutations = { 
  setTranslationObj(state, data) {
    state.translationObj = data
  }
};

export const actions = {
  changeLanguage({ commit }, language) {
    commit('setLanguage', language);
  },
  async getTranslationData({ commit } , lang) {
    // const lang = this.$cookies.get('lang');
    // await this.$axios.get(`https://api.cslzone.com/language-strings/language/${lang}`)
    await this.$axios.get(`http://localhost:9000/api/languages?lang=${lang}`)
      .then((data) => {
        // console.log('-------------------------->',data);
        commit('setTranslationObj', data.data.data)
      })
      .catch(err => {
        console.log(err)
      })

  }
};

 