<template>
    
    <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider>
   
    <v-list-item 
    class="rounded-xl"
    link title="Dashboard" 
    prepend-icon="mdi-view-dashboard" 
    append-icon="mdi-chevron-right"
    active="true">
    </v-list-item>

    <v-list-item 
    class="rounded-xl"
    link title="Members" 
    prepend-icon="mdi-account-multiple"
    append-icon="mdi-chevron-right">
    </v-list-item>

    <v-list-item 
    class="rounded-xl"
    link title="Logout"
     prepend-icon="mdi-logout"
     append-icon="mdi-chevron-right">
    </v-list-item>
  
   
</template>