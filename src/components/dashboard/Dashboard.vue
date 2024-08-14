<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
    color="blue-grey-darken-4"
    width="300"
    class="pa-6">

    <LeftSideNav />
   
   
    </v-navigation-drawer>
 

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Dashboard Overview</v-app-bar-title>
    </v-app-bar>

    <v-main>

      <!--  -->
      <DashboardContent />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import LeftSideNav from './LeftSideNav.vue';
import DashboardContent from './DashboardContent.vue';

const drawer = ref(null)







</script>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>