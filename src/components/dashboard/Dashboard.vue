<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-responsive>
        <v-icon
        size="20"
        class="ma-4"
        @click="toggleTheme"
        >
        {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}

        </v-icon>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <!-- 1st Cols inside row -->
          <v-col 
          cols="12" 
          sm="3"
           class="order-1"
           >
           <!-- cols 12(kapag ni resize sa maliit na screen)
            sm 3(3 cols ang size kapag sa bigscreen) -->

            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  :title="`List Item ${n}`"
                  link
                ></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  color="grey-lighten-4"
                  title="Refresh"
                  link
                ></v-list-item>
                <v-container class="d-flex" align="center" justify="center">
                  <a
                    v-for="(icon, index) in icons"
                    :key="index"
                    :href="social[index]"
                    target="_blank"
                    class="icon-link"
                    rel="noopener noreferrer" 
                  >
                    <v-icon>{{ icon }}</v-icon>
                  </a>
        
                </v-container>
              </v-list>
            </v-sheet>
          
          </v-col>
          <!-- 2nd Cols inside row -->
          <v-col cols="12"
           sm="6"
           class="order-2">
            <v-sheet
              class="h-auto"
              rounded="lg"
            >
            <!-- min-height="100"  -->
            
              <!--  -->
            <!-- <About /> -->
             <Scroller />
            </v-sheet>
          </v-col>

          <!-- 3rd Cols inside row -->
           <v-col 
           cols="12" 
           sm="3"
           rounded
           class="order-3">
            <v-card
            rounded="lg"
            height="400"
            class="pa-4">

            <v-divider></v-divider>
                <Card />
            </v-card>
           </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<style scoped>
a {
  text-decoration: none;
}
/* OVERRIDE CSS  */



/* @media (max-width: 1000px) {
  .order-1 {
    order: 1;
  }
  .order-2 {
    order: 3;
  }
  .order-3 {
    order: 2;
  }
} */

</style>

<script setup>
const links = [
    'Dashboard',
    'Messages',
    'Job Post',
    'Notifications',
  ]
  
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
  export default {
    data: () => ({
      links: [
        'Dashboard',
        'Messages',
        'Job Post',
        'Notifications',
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-github',
        'mdi-slack'
      ],
      social: [
        'https://facebook.com',
        'https://twitter.com',
        'https://www.linkedin.com/in/devnetrb',
        'https://github.com',
        'https://slack.com'
      ]
    }),

  }
</script>