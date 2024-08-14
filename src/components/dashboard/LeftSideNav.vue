<template>
    
    <!-- <v-list-item title="" subtitle="">
        <v-icon color="red" size="70">mdi-microsoft-xbox</v-icon>
    </v-list-item> -->
    <div class="text-h4" justify="center" align="center">
        <v-icon color="red" size="80">mdi-microsoft-azure</v-icon>
        Z-App
    </div>
   
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