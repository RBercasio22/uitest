<template>
    <v-cols cols="12"
     sm="6"
    >
        <v-card
        class="mx-auto ma-5 pa-5 flex-sm-0-1-100"
        max-width="500"
     
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
  
        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>
      </v-container>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
  
        <v-btn color="success">
          Complete Registration
  
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    </v-cols>
    
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