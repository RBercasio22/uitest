<template>
    <v-container>
        <v-row>
            <!-- change from md to sm -->
            <v-col cols="12" sm="6">
                <v-sheet 
                class="pt-4 pl-4"
                height="550"
                >
                <About />
            </v-sheet>
            </v-col>
            <v-col cols="12" sm="6">
                 <!-- V-SHEET START -->
                <v-sheet
                 class="pa-4"
                 >
                 <v-row align="center" justify="center" class="mb-4 mt-3">
                    <v-icon size="100">mdi-account</v-icon>
                 </v-row>
                
                <v-row
                class="mb-3 ml-5"
                >
                    <h1 class="text-h3">Login</h1>
                </v-row>
                <!-- USER LOGIN -->
                 <v-text-field
                    label="E-mail"
                    prepend-inner-icon="mdi-email"
                    variant="outlined"
                    class="ml-5 mr-5"
                ></v-text-field>
                
                <v-text-field
                    label="Password"
                    prepend-inner-icon="mdi-lock"
                    :append-inner-icon="visible ? 'mdi-eye': 'mdi-eye-off'"
                    :type="visible ? 'text': 'Password'"
                    variant="outlined"
                    class="ml-5 mr-5"
                    @click:append-inner="visible = !visible"
                >
                </v-text-field>


                <!-- REMEMBER PASSWORD CHECKBOX -->
                 <v-row>
                    <v-col cols="12">
                        <v-row
                         class="ml-2"
                        align="center"
                        justify="start">
                        <v-checkbox 
                        class="text-xs-caption"
                        label="Remember Me">

                        </v-checkbox>
                       
                            <!-- NESTED V_ROW START -->
                            <v-row 
                            class="mr-5"
                            justify="end">
                                <a
                                class="text-caption text-decoration-none text-red"
                                href="#"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                Forgot login password?
                                </a>
                            </v-row>
                            <!-- NESTED V_ROW END -->
                        </v-row>
                    </v-col> 

                    <!-- FORGOT PASSWORD LINK -->
                    <!-- <v-col cols="6" sm="6">
                    <v-row
                        class="mr-4 pt-4"
                        align="center"
                        justify="end"
                        >
                        <a
                        class="text-caption text-decoration-none text-red"
                        href="#"
                        rel="noopener noreferrer"
                        target="_blank"
                        >
                        Forgot login password?
                        </a>
            
                    </v-row>
                    </v-col>   -->
                 </v-row>

                 <v-row 
                  class="mb-1 mr-5"
                  align="center" 
                  justify="end" 
                  >
                     <v-btn color="red">LOGIN</v-btn>
                 </v-row>

                 <!-- V-SHEET END -->
                </v-sheet>  
                
            </v-col>
        </v-row>
    
    </v-container>

</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}


</style>

<script>
export default {
    data: () => ({
        visible: false,
    })
};
</script>