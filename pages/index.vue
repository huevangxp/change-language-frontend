<template>
  <div>
    {{ t("home") }}
 

    
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
