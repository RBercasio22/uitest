<template>
  <v-app id="inspire">
    <!--    
    <v-navigation-drawer
    max-width="100"
    class="w-0"
     v-model="drawer"

    >
  
    </v-navigation-drawer>
   -->
    <v-app-bar
    color="red">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-app-bar-title class="text-h6 text-{breakpoint}-{sm,nd,lg,xl}" style="color: white">
        Application
      </v-app-bar-title>
      <v-btn active color="white">LOGIN</v-btn>
      <v-btn color="white">SIGNUP</v-btn>
    </v-app-bar>

    <v-main>
      <!--  -->
      <!-- <router-view /> -->

      <!-- <HelloWorld /> -->
       <Login />
    </v-main>
  </v-app>
</template>

<style scoped>


</style>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>

<script>
  export default {
    //data: () => ({ drawer: null }),

  }
</script>





