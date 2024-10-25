<template>
    <header>
      <button @click="changeLanguage('la')">ພາສາລາວ</button>
      <button @click="changeLanguage('en')">English</button>
    </header>
  </template>
  
  <script>
  export default {
    methods: {
      changeLanguage(lang) {
        this.$store.dispatch('changeLanguage', lang); // Dispatch action to change language
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
  