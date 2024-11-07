<template>
  <v-app>
    <!-- Include the Header Component -->
   <div>
     
    <Header />
   </div>

    <!-- Main content of the page -->
   <v-main>
    <v-container>
      <Nuxt />
    </v-container>
   </v-main>
  </v-app>
</template>

<script>

 
export default {
  name: 'DefaultLayout',

}
</script>

<style>
/* You can add some global styles here */
</style>
