<template>

    <v-container
     md="6"
    
    >
    
        <v-card
        class="mx-auto ma-5 pa-5 flex-sm-0-1-100"
        max-width="500"
        elevation="10"
        
        
        >
        <h1 class="text-h2 ml-5">Sign Up</h1>
      <v-container>
        <v-text-field
          v-model="first"
          color="primary"
          label="First name"
          variant="outlined"
          prepend-inner-icon="mdi-account-outline"
        ></v-text-field>
  
        <v-text-field
          v-model="last"
          color="primary"
          label="Last name"
          variant="outlined"
          prepend-inner-icon="mdi-lan"
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="outlined"
          prepend-inner-icon="mdi-email"
          :rules="[
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
                  ]"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          type="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="outlined"
          prepend-inner-icon="mdi-lock"
        ></v-text-field>
  
      </v-container>
      <v-row
      align="center"
      justify="end"
      class="mr-5 mb-5"
      >
      <v-btn color="success">
        SIGNUP
      </v-btn>

      </v-row>

  
    </v-card>

    </v-container>
 
</template>

<script>

export default {
    data: () => ({
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false


    })
}

</script>