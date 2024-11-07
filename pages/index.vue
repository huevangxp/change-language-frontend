<template>
  <div>
    {{ t("home") }}
 

    <v-row>
      <v-col v-for="product in news" :key="product.id" cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-card-title>{{ product.description }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
            translationObj() {
                return this.$store.state.translationObj;
            }, 
            news() {
                return this.$store.state.product.news;
            }
        },
   mounted() {
    const lang =  this.$cookies.get('lang');
 
    this.$store.dispatch('getTranslationData', lang);
    this.$store.dispatch('product/getProducts', lang);

  },
  methods: {
    changeLanguage(lang) {
      this.$store.dispatch('changeLanguage', lang);
    },
  },
};
</script>
