<template>
    <div class="score_card"> 
        <iframe :src="html_location"></iframe>
    </div>
</template>

<script>
  export default {
    name: 'scorecard',
    data: function() {
        return {
            html_location: this.$store.getters.settings['General']['path'] + this.$store.getters.settings['General']['scorecard_src'],  
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
    .score_card {
        padding-left:18%;
        height:100vw;
        overflow-y: scroll;
    }

    iframe {
        width:100%;
        height:100vw;

    }
</style>