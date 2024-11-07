<template>
  <header>
    <button @click="changeLanguage('la')">ພາສາລາວ</button>
    <button @click="changeLanguage('en')">English</button>
  </header>
</template>

<script>
export default {
  name: 'Header',

  mounted() {
    const lang = this.$cookies.get('lang');
    if (lang) {
      this.$store.dispatch('getTranslationData', lang); // Load language data if cookie exists
    }
  },

  methods: {
    changeLanguage(lang) {
      const currentLang = this.$cookies.get('lang');
      if (currentLang !== lang) {
        this.$cookies.set('lang', lang);
        // this.$store.dispatch('getTranslationData', lang); // Fetch new language data
        location.reload(); // Reload the page only if the language has changed
      }
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

button {
  margin-left: 10px;
}
</style>
