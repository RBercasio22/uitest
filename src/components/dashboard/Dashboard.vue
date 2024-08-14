<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
    color="blue-grey-darken-4"
    width="300"
    class="pa-4"
   
     
    >
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
// import { ref } from 'vue'
// import { useTheme } from 'vuetify';




// const theme = useTheme()
// const isDark = ref(theme.global.current.value.dark)



// function toggleTheme() {
//   const delay = 200
//   isDark.value = !isDark.value
//   setTimeout(() => {
//     theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
//   }, delay);
// }


</script>

<script>

  export default {
    data: () => ({ drawer: null }),
    
  }



  

</script>