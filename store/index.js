// store/index.js
export const state = () => ({
    currentLanguage: 'la' // Default language is Lao
  });
  
  export const mutations = {
    setLanguage(state, language) {
        // console.log(language);
      state.currentLanguage = language;
    }
  };
  
  export const actions = {
    changeLanguage({ commit }, language) {
      commit('setLanguage', language);
    }
  };
  
  export const getters = {
    getCurrentLanguage(state) {
      return state.currentLanguage;
    }
  };
  