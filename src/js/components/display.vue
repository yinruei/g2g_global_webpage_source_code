<template>
    <div class="display" style="background-image: url(images/manl.png);">   
        <div v-if="this.$store.getters.display_content=='home'">
            <DisplayHome></DisplayHome>
        </div>
        <div v-else-if="this.$store.getters.display_content.indexOf('filename_2nd')!= -1 | this.$store.getters.display_content.indexOf('Rainfall')!= -1" >
            <Threepics :srcs="this.$store.getters.current_srcs" :key="this.$store.getters.current_srcs[0]" ></Threepics>
        </div>
        <div v-else-if="this.$store.getters.display_content.indexOf('filename_second')!= -1 | this.$store.getters.display_content.indexOf('Ensemble')!= -1" >
            <Twopics :srcs="this.$store.getters.current_srcs" :key="this.$store.getters.current_srcs[0]" ></Twopics>
        </div>
        <div v-else>
            <Pic :srcs="this.$store.getters.current_srcs" :key="this.$store.getters.current_srcs[0]" ></Pic>
        </div>
    </div>
</template>

<script>
import DisplayHome from './display_home.vue'
import Pic from './display_pic.vue'
import Twopics from './display_twopics.vue'
import Threepics from './display_threepics.vue'

  export default {
    name: 'display',
    created: function(){
    },

    data: function() {
        return {
            error: false
        }
    },
    computed: {

    },       
    methods: {

    },
    filters: {
        
    },
    components: {DisplayHome, Pic, Twopics, Threepics},
  }
</script>

<style scoped>
    .display {
        width: 82%;
        margin-left: 18%;
        padding-top:30px;
        border-top: 2px solid #333;
    }

</style>