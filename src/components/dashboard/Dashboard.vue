<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer"
    color="blue-grey-darken-4"
    width="300"
    class="pa-4">

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
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = ref(theme.global.current.value.dark)




// Define the menu items with names, icons, and optional hrefs
const links = [
  // { name: 'profile', icon: 'mdi-account', href: '/profile' },
  { name: 'messages', icon: 'mdi-message', href: '/messages' },
  { name: 'job Post', icon: 'mdi-briefcase', href: '/job-post' },
  { name: 'notifications', icon: 'mdi-bell', href: '/notifications' }
]

const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-github',
  'mdi-slack'
]

const social = [
  'https://facebook.com',
  'https://twitter.com',
  'https://www.linkedin.com/in/devnetrb',
  'https://github.com',
  'https://slack.com'
]



function toggleTheme() {
  const delay = 200
  isDark.value = !isDark.value
  setTimeout(() => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }, delay);
}



</script>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>