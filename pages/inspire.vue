<template>
  <div>
    <!-- Product List -->
    {{ t("about") }}
    <v-row>
      <v-col v-for="items in news" :key="items.id" cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>{{ items.title   }}</v-card-title>
          <v-card-title>{{ items.description   }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
 
    currentLanguage() {
      return this.$store.getters.getCurrentLanguage;
    },
    news() {
      return this.$store.state.news.newsData;
    }
  },
  data() {
    return {
      products: [] // Product data will be fetched from the API
    };
  },
  mounted() {
    const lang = this.$cookies.get('lang');

    this.$store.dispatch('news/getNews', lang);

    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await this.$axios.$get('/news');
        this.products = response;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}
</style>
