<template>
  <div>
    <div>{{ t("cryptoWallet") }}</div>
    <v-btn @click="$store.dispatch('getTranslationData', 'th-TH')">Thai</v-btn>
    <v-btn @click="$store.dispatch('getTranslationData', 'en-US')">Eng</v-btn>
    <!-- Product List -->
<<<<<<< HEAD
    {{ products }}
    <div v-if="products.length">
=======
    <!-- <div v-if="products.length">
>>>>>>> be5256775df6bbc1ee8f3bb2684eb8f094c7e804
      <div v-for="product in products" :key="product.id" class="product-card">
        <h2>{{ currentLanguage === 'la' ? product.name_la : product.name_en }}</h2>
        <p>{{ currentLanguage === 'la' ? product.description_la : product.description_en }}</p>
        <p>{{ product.price }} {{ currentLanguage === 'la' ? 'ກີບ' : 'KIP' }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  computed: {
    // Get current language from Vuex store
    currentLanguage() {
      return this.$store.getters.getCurrentLanguage;
    },
  },
  data() {
    return {
      products: [], // Product data will be fetched from the API
    };
  },
  mounted() {
    this.fetchData();
    this.$store.dispatch("getTranslationData");
  },
  methods: {
    async fetchData() {
      try {
<<<<<<< HEAD
        const response = await this.$axios.get('http://localhost:9000/api/products?lang=la');
        console.log('data ------------------->',response);
=======
        const response = await this.$axios.$get("/product");
>>>>>>> be5256775df6bbc1ee8f3bb2684eb8f094c7e804
        this.products = response;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}
</style>
