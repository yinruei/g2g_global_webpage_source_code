<template>
    <v-app id="inspire">
        <Sidebar/>
        <div v-if="is_scorecard">
            <ScoreCard/>
        </div>
        <div v-else>
            <Topmenu/>
            <Display/>
        </div>
    </v-app>
</template>

<script>
    import Sidebar from './components/sidebar.vue';
    import Topmenu from './components/topmenu.vue';
    import Display from './components/display.vue';
    import ScoreCard from './components/scorecard.vue'
    export default {
        data: function() {
            return {
                
            }
        },
        computed: {
            is_scorecard: function() {
                return this.$store.getters.is_scorecard;
            }
        },
        components: {Sidebar, Topmenu, Display, ScoreCard},
        methods: {

        },
        name: 'App'
    }

</script>

<style>
    [v-cloak] {
        display: none;
    }

    body  {
        font-family:'Material Icons', Arial,Verdana,Sans-Serif, Microsoft JhengHei; 
        margin: 0 auto;
        -webkit-overflow-scrolling: touch;
    }


    .pseudo-link:hover {
        cursor: pointer;
    }

    .color-blue {
        color:blue;
    }

    .color-red {
        color:red;
    }    
</style>