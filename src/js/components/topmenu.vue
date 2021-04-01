<template>
    <div class="topmenu" style="background-image: url(images/manl.png);">   
        <div v-if="this.$store.getters.top_content=='home'" class="topmenu-base">
            <div  class="home-topmenu-container">
                <p align="center">
                    <a href="http://pstn01.mic.cwb/V7/index.htm" target=blank>
                        <span class="title">Global Climate and Wather Modeling Group</span>
                    </a><br>
                    <a href="http://pstn01.mic.cwb/V7/index.htm" target=blank>
                        <span class="title">The Meteorological Research and Development</span>
                    </a><br>
                    <a href="http://pstn01.mic.cwb/V7/index.htm" target=blank>
                        <span class="title">Central Weather Bureau</span>
                    </a>
                </p>
                <br>
                <p align="center">
                    <span class="main-title title font-weight-bold">GFS/CWB Global Model Experimental Forecast Performance Statistics</span>
                </p>
                <br>
            </div>
        </div>
        
        <div v-else-if="this.$store.getters.top_content.indexOf('UpperAir') > -1">
            <p align="center" class="color-blue title font-weight-bold comic-sans">
            {{ title }}
            </p>
            <v-container grid-list-xs text-xs-center>
                <v-layout row wrap justify-center >
                    <v-flex>  
                        <TopMenuTable :rows="all_rows" :major_type="major_type" :sub_type="sub_type"></TopMenuTable>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>   
        
        <div v-else-if="this.$store.getters.top_content.indexOf('Surface') > -1">
            <br>       
            <div v-for="(current_rows, index) in all_rows" :key="index" class="text-xs-center">
                <TopMenuParamTable :rows="current_rows" :major_type="major_type" :sub_type="sub_type"></TopMenuParamTable>
            </div>
        </div>

        <div v-else-if="this.$store.getters.top_content.indexOf('Ensemble') > -1">
            <p align="center" class="color-blue title font-weight-bold comic-sans">
            {{ title }}
            </p>
            <v-container grid-list-xs text-xs-center>
                <v-layout row wrap justify-center >
                    <v-flex>  
                        <TopMenuTable_Ensemble :rows="all_rows" :major_type="major_type" :sub_type="sub_type"></TopMenuTable_Ensemble>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>

        <div v-else-if="this.$store.getters.top_content.indexOf('SFC') > -1">
            <p align="center" class="color-blue title font-weight-bold comic-sans">
            {{ title }}
            </p>
            <v-container grid-list-md text-xs-center>
            <v-layout row wrap justify-space-around>
                <v-flex xs6>  
                <TopMenuSfcMeanTable :rows="all_rows" :major_type="major_type" :sub_type="sub_type"></TopMenuSfcMeanTable>
                </v-flex>
            </v-layout>
            </v-container>
        </div>
        
        <div v-else-if="this.$store.getters.top_content.indexOf('Select') > -1">
            <p align="center" class="color-blue title font-weight-bold comic-sans">
            {{ title }}
            </p>
            <v-container grid-list-md text-xs-center>
            <v-layout row justify-center>
                <v-flex>  
                    <TopGlobalTable :rows="all_rows" :major_type="major_type" :sub_type="sub_type"></TopGlobalTable>
                </v-flex>
            </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
  import TopMenuTable from './topmenu_table.vue'
  import TopMenuTable_Ensemble from './topmenu_Ensembletable.vue'
  import TopGlobalTable from './topmenu_global_table.vue'  
  import TopMenuParamTable from './topmenu_param_table.vue'
  import TopMenuSfcMeanTable from './topmenu_sfcmean_table.vue'
  export default {
    name: 'topmenu',
    data: function() {
        return {

        }
    },
    props:  {

    },
    created: function() {

    },
    computed: {
        major_type: function() {
            return this.$store.getters.major_type;
        },
        sub_type: function() {
            return this.$store.getters.sub_type;
        },
        all_rows: function() {
            return this.$store.getters.tables_array;
        },
        title: function() {
            return this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['title'];
        }
    },       
    methods: {
    },
    components: { TopMenuTable,TopMenuTable_Ensemble, TopMenuParamTable, TopGlobalTable, TopMenuSfcMeanTable },
    filters: {
        
    }
  }
</script>

<style scoped>
    .topmenu {
        margin-left:18%;
        width: 82%;
        height: 30vh;
        overflow-x: auto;
        padding-top: 20px;

    }

    .topmenu-base {
        display: table;
        width: 100%;
    }

    .topmenu .container {
        padding: 0 24px !important;
    }

    a span {
        font-weight:bold;
    }

    .main-title {
        color:brown;
    }

    .comic-sans {
        font-family: "Comic Sans MS" !important;
    }

    td.pic-link {
        cursor: pointer;
    }

    .home-topmenu-container{
        line-height: 120%;
        display: table-cell;
    }



</style>