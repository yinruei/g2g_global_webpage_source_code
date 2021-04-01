<template>
    <div class="pics"> 
        <v-container grid-list-xs text-xs-center>                          
            <v-layout row wrap justify-center>
                <v-flex v-for="(src, index) in srcs" :key="index" xs8 >
                    <v-card flat tile>                
                        <img :src="src" 
                        contain
                        alt="no image"
                        max-height="700"
                        width="700"  
                        class="grey lighten-2"
                        @error="error=true"
                        >
                        <div v-if="error">
                            <v-card class="grey lighten-2 img-error">
                            <div class="error--text">圖片讀取失敗!</div>
                            </v-card>
                        </div>
                    </v-card>
                </v-flex> 
            </v-layout>
        </v-container>
    </div>
</template>

<script>
  export default {
    name: 'display_pic',
    
    created: function() {

    },    
    
    data: function() {
        return {
            error: false,  
        }
    },
    
    props:  {
        srcs: {
            type: Array,
            default: function() { return [] }
        },
    },

    computed: {

    },       

    methods: {
        
    },  
  }
</script>

<style scoped>
    .img-error {
        height:700px;
    }
</style>