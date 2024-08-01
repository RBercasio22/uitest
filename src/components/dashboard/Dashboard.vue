<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <!--  -->
      </v-navigation-drawer>
  
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-app-bar-title>Application</v-app-bar-title>
        <v-icon
        size="20"
        class="ma-4"
        @click="toggleTheme"
        >
        {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}

        </v-icon>
      </v-app-bar>
  
      <v-main>
        <!--  -->
      </v-main>
    </v-app>
  </template>
  
<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify';


const drawer = ref(null)
const theme = useTheme()
const isDark = ref(theme.global.current.value.dark)

function toggleTheme() {
    isDark.value = !isDark.value
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
  

</script>
  
<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>