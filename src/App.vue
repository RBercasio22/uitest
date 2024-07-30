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
    <v-app-bar color="red">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-app-bar-title class="text-h6 text-{breakpoint}-{sm,nd,lg,xl}" style="color: white">
        <v-icon size="50">mdi-broadcast</v-icon>
      </v-app-bar-title>
      <v-btn active color="white">LOGIN</v-btn>
      <v-btn color="white">SIGNUP</v-btn>
      
    
      <!-- <v-btn @click="toggleTheme">
        <v-icon @click="toggleTheme">{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn> -->

      <v-icon size="20"
      class="mr-4"
       @click="toggleTheme">
       {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
      </v-icon>

      <!-- <v-sheet
      prepend-inner-icon="mdi-lock"
      :append-inner-icon="visible ? 'mdi-eye': 'mdi-eye-off'"
      :type="visible ? 'text': 'Password'"   
      @click:append-inner="visible = !visible">
        
      </v-sheet> -->
     
      
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
import { useTheme } from 'vuetify'

const drawer = ref(null)

const theme = useTheme()
const isDark = ref(theme.global.current.value.dark)
function toggleTheme () {
  isDark.value = !isDark.value
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>

<script>
  export default {
    //data: () => ({ drawer: null }),

  }


</script>





