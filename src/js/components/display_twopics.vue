<template>
    <div class="twofilepics" text-align='center'>
        <v-container grid-list-xs>   
            <v-layout justify-center row fill-height>
                <v-flex v-for="(src, index) in srcs" :key="index" xs6 style="text-xs-center">
                    <img :src="src" contain alt="no image"
                        width="95%" class="grey lighten-2" @error="error=true"
                        style="margin: 0px 1.25%"
                    >
                    <div v-if="error">
                        <v-card class="grey lighten-2 img-error">
                        <div class="error--text">圖片讀取失敗!</div>
                        </v-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
    
</template>

<script>
  export default {
    name: 'display_twopics',
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
        height: 700px;
    }

</style>