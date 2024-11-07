<template>
  <div>
    <v-app-bar app fixed >
      <v-toolbar-title>{{ t("about") }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-earth</v-icon> <!-- Icon for language selection -->
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="changeLanguage('la')">
            <v-list-item-avatar>
              <v-img src="path-to-lao-flag-icon.png" alt="Lao Flag"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>ພາສາລາວ</v-list-item-title>
          </v-list-item>

          <v-list-item @click="changeLanguage('en')">
            <v-list-item-avatar>
              <v-img src="path-to-english-flag-icon.png" alt="English Flag"></v-img>
            </v-list-item-avatar>
            <v-list-item-title>English</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",

  mounted() {
    const lang = this.$cookies.get("lang");
    if (lang) {
      this.$store.dispatch("getTranslationData", lang); // Load language data if cookie exists
    }
  },

  methods: {
    changeLanguage(lang) {
      const currentLang = this.$cookies.get("lang");
      if (currentLang !== lang) {
        this.$cookies.set("lang", lang);
        location.reload();
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
