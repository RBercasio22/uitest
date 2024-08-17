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

    <v-main class="bg-grey-lighten-3">
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

<!-- <script>

  export default {
    data: () => ({ drawer: null }),
    
  }


</script> -->


<script>
export default {
  data() {
    return {
      data: () => ({ drawer: null }),
      drawer: true, // Default to showing the drawer
      minWidth: 600  // Minimum width at which the drawer should be hidden
    };
  },
  mounted() {
    // Set initial state based on window size
    this.checkWindowSize();

    // Add resize event listener
    window.addEventListener('resize', this.checkWindowSize);
  },
  beforeDestroy() {
    // Remove event listener on component destroy
    window.removeEventListener('resize', this.checkWindowSize);
  },
  methods: {
    checkWindowSize() {
      this.drawer = window.innerWidth >= this.minWidth;
    }
  }
};
</script>
