<template>
    <!-- <v-container class="bg-grey-lighten-3"> -->
    <!-- 1st Column -->
    <v-container>
        <v-container class="bg-grey-lighten-5 rounded-xl">
            <v-row>    
              
                <!-- Loop through the cards array and display each DashboardCard component -->
                <v-col v-for="(card, index) in formattedCards" :key="index" cols="12" sm="12" md="12" lg="3">
                    <DashboardCard :color="card.color" :icon="card.icon" :title="card.title" :display="card.display" />
                </v-col>
            </v-row>
        </v-container>
    </v-container>

    <!-- 2nd Column -->
     <v-container>
        <!-- <v-container class="bg-grey-lighten-5 rounded-xl"> -->
            <v-row>
                <v-col cols="12" sm="8">
                    <v-container class="bg-grey-lighten-5 rounded-xl">
                       <RecentInvoice />
                    </v-container>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-container class="bg-grey-lighten-5 rounded-xl">
                        <NewsPage />
                    </v-container>
                </v-col>
            </v-row>
        <!-- </v-container> -->

     </v-container>

     <!-- Closing Container -->
 <!-- </v-container> -->

  </template>
  

  <script setup>
  import { ref, computed } from 'vue';
  import DashboardCard from './DashboardCard.vue'; // Make sure the path is correct
  
  // Array of raw card data
  const rawCards = ref([
    { title: 'Total Sales 1', amount: 12900, icon: 'mdi-view-dashboard', color: 'amber-lighten-1' },
    { title: 'Total Sales 2', amount: 15600, icon: 'mdi-bank', color: 'grey-darken-4' },
    { title: 'Total Sales 3', amount: 23400, icon: 'mdi-microsoft-dynamics-365', color: 'brown-darken-1' },
    { title: 'Total Sales 4', amount: 18900, icon: 'mdi-microsoft-xbox', color: 'green-darken-4' }
  ]);
  
  // Computed property to format card data
  const formattedCards = computed(() => {
    return rawCards.value.map(card => ({
      ...card,
      display: card.amount.toLocaleString()
    }));
  });
  </script>
  