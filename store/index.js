// store/index.js
export const state = () => ({
  currentLanguage: 'la', // Default language is Lao
  translationObj: []
});

export const mutations = {
  setLanguage(state, language) {
    // console.log(language);
    state.currentLanguage = language;
  },
  setTranslationObj(state, data) {
    state.translationObj = data
  }
};

export const actions = {
  changeLanguage({ commit }, language) {
    commit('setLanguage', language);
  },
  async getTranslationData({ commit }, lang = 'th-TH') {
    const response = await this.$axios.get(`https://api.cslzone.com/language-strings/language/${lang}`)
      .then((data) => {
        commit('setTranslationObj', data.data)
      })
      .catch(err => {
        console.log(err)
      })

  }
};

export const getters = {
  getCurrentLanguage(state) {
    return state.currentLanguage;
  }
};
