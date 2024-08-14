<template>
    <v-card class="mx-auto rounded-xl bg-grey-lighten-3" max-width="500" border flat>
      <v-list-item class="px-6" height="40">
        <template v-slot:prepend>
          <v-icon color="purple" size="40">mdi-bank</v-icon>
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

import { ref, computed } from 'vue'
import { defineProps } from 'vue';

// const income = ref(12900)

const props = defineProps({
  title: String,
  display: String
});

// const display = computed(() => {
//     return income.value.toLocaleString();
// })



</script>
