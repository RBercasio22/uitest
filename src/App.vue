<template>
    <v-app>
      <!-- Conditionally render v-app-bar based on the current route meta -->
      <v-app-bar
        v-if="showAppBar"
        :elevation="0"
        color="blue-grey-darken-4"
      >
        <v-app-bar-title>
          <div class="text-h4" justify="center" align="start">
            <v-icon color="red" size="80">mdi-microsoft-azure</v-icon>
            Z-App
          </div>
          
        
        </v-app-bar-title>
        
        <v-btn
         color="white" 
         elevation="1" 
         to="/">
          Login
        </v-btn>
        <v-btn
         color="white" 
         elevation="1"
          to="/signup">
          Signup
        </v-btn>
        <v-icon
        size="20"
        class="ma-4"
        @click="toggleTheme"
        >
        {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}

        </v-icon>
     
      </v-app-bar>
  
      <v-main>
        <router-view />
      </v-main>
    </v-app>
</template>


<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = ref(theme.global.current.value.dark)

function toggleTheme() {

    const delay = 200
    isDark.value = !isDark.value
    setTimeout(() =>{
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

    }, delay);

}
  
</script>
  
<script>
import router from './router';
  

export default {
  router,
    computed: {
      showAppBar() {
        
        // Determine if the app bar should be shown based on the route meta
        return this.$route.meta.showAppBar !== false;
      }
    }
  };

</script>
  
