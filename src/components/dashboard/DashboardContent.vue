<template>
    <v-container class="bg-grey-lighten-3">
    <!-- 1st Column -->
    <v-container>
        <v-container class="bg-grey-lighten-5 rounded-xl">
            <v-row>
                <!-- Loop through the cards array and display each DashboardCard component -->
                <v-col v-for="(card, index) in formattedCards" :key="index" cols="3">
                <DashboardCard :title="card.title" :display="card.display" />
                </v-col>
            </v-row>
        </v-container>
    </v-container>

    <!-- 2nd Column -->
     <v-container>
        <!-- <v-container class="bg-grey-lighten-5 rounded-xl"> -->
            <v-row>
                
                <v-col cols="8">
                    <v-container class="bg-grey-lighten-5 rounded-xl">
                       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum soluta repellendus sunt vel, incidunt ullam placeat ratione ea recusandae eligendi consequuntur minima quia, assumenda minus alias sit? Deleniti voluptatem quia, temporibus consequatur veniam aliquid accusantium eligendi fuga quidem deserunt fugiat dolore doloribus rerum pariatur vero architecto est quisquam dolorem nobis maiores atque excepturi nulla dolor debitis. Ducimus modi dolorum dignissimos quam nulla! Similique ratione pariatur perspiciatis, at porro cum magni vel deleniti molestias ullam voluptatibus temporibus omnis nesciunt, voluptate a! Autem, maxime nesciunt. Necessitatibus in sed maxime inventore officiis ratione nisi dolorum, non dolorem distinctio provident dicta error, dolor debitis.</p>
                    </v-container>
                </v-col>
                <v-col cols="4">
                    <v-container class="bg-grey-lighten-5 rounded-xl">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium magnam temporibus beatae voluptatem rem sapiente eius, aliquid facere! Excepturi voluptas ipsa aspernatur tenetur nemo quisquam nam, in totam quos voluptate expedita, facere beatae cupiditate labore provident, commodi ipsum maiores aliquid reprehenderit? Illum iure quasi ratione delectus sint distinctio harum corporis?</p>
                    </v-container>
                        
                </v-col>
            </v-row>
        <!-- </v-container> -->


     </v-container>

     <!-- Closing Container -->
 </v-container>

  </template>
  



  <script setup>
  import { ref, computed } from 'vue';
  import DashboardCard from './DashboardCard.vue'; // Make sure the path is correct
  
  // Array of raw card data
  const rawCards = ref([
    { title: 'Total Sales 1', amount: 12900 },
    { title: 'Total Sales 2', amount: 15600 },
    { title: 'Total Sales 3', amount: 23400 },
    { title: 'Total Sales 4', amount: 18900 }
  ]);
  
  // Computed property to format card data
  const formattedCards = computed(() => {
    return rawCards.value.map(card => ({
      ...card,
      display: card.amount.toLocaleString()
    }));
  });
  </script>
  