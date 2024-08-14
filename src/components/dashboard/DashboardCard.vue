<template>
    <v-card class="mx-auto rounded-xl bg-grey-lighten-3" max-width="600" border flat>
      <v-list-item class="px-6" height="40">
        <template v-slot:prepend>
          <!-- Gumamit ako ng v-bind para mabind ko yung color :color -->
          <v-avatar rounded="2" class="mt-3" :color="color"> 
            <v-icon color="white" size="20">{{ icon }}</v-icon>
          </v-avatar>
          
        </template>
      </v-list-item>
  
      <v-card-text class="text-medium-emphasis pa-6">
        <div class="text-h6 mb-6">{{ title }}</div>
        <div class="text-h4 font-weight-black mb-4">${{ display }}</div>
        <div>$0 of $100 earned — 7 days left</div>
      </v-card-text>
    </v-card>
  </template>


<script setup>

// import { ref, computed } from 'vue'
import { defineProps } from 'vue';



const props = defineProps({
  title: String,
  icon: String,
  color: String,
  display: String
});





</script>
