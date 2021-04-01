<template>

    <div class="sidebar" style="background-image: url(images/sidebar.png);">
        <!-- <div class="normal-pic" @click="set_scorecard_state(false)">   -->
        <div class="normal-pic">  
            <img src="images/home.png" class="home" @click="change_component('home')">
            <br>
             <table id="left-top-table">
                <tr>
                    <td class="invisble border"></td>
                    <td class="body-2 font-weight-bold color-blue" colspan="3">Vaild time verification type</td>
                </tr>
                <tr>
                    <td class="body-2 font-weight-bold color-blue" rowspan="2">resolution type</td>
                    <td class="body-2 font-weight-bold text-align-center">G2</td>
                    <td class="body-2 font-weight-bold color-red link" @click="newWindowfunction($store.getters.settings['General']['G2_00Z']);">00Z</td>
                    <td class="body-2 font-weight-bold color-red link" @click="newWindowfunction($store.getters.settings['General']['G2_12Z']);">12Z</td>
                </tr>
                <tr>
                    <td class="body-2 font-weight-bold text-align-center" >G3</td>
                    <td class="body-2 font-weight-bold color-red link" @click="newWindowfunction($store.getters.settings['General']['G3_00Z']);">00Z</td>
                    <td class="body-2 font-weight-bold color-red link" @click="newWindowfunction($store.getters.settings['General']['G3_12Z']);">12Z</td>
                </tr>
            </table>
            <br>
            
            <div v-if="item_has_data">
                <p class="title">
                    <span class="body-2 font-weight-bold color-blue">Forecast Maps:</span>
                </p>
                
                <!-- UpperAir & Surface -->
                <div class="title" v-for="(item, index) in forecast_maps" :key="'map' + index">
                    <span class="body-2 font-weight-bold color-green">{{ item.text }}</span>

                    <v-select  
                        :items="items['Select' + item.key]" 
                        item-text="text"
                        item-value="value"
                        label="請選擇" 
                        v-model="item_params[item.param]"
                        @input="change_component('Select' + item.key + '_' + item_params[item.param])"
                    >
                    </v-select>
                </div>
                
                <!-- Ensemble -->
                <div class="title" v-for="(item, index) in ensemble_tool" :key="'tool' + index">
                    <span class="body-2 font-weight-bold color-green">{{ item.text }}</span>
                    <v-select
                        :items="items['Select' + item.key]" 
                        item-value="value"
                        label="請選擇" 
                        v-model="item_params[item.param]"
                        @input="change_component('Select' + item.key + '_' + item_params[item.param])"
                    >
                    </v-select>
                </div>
                
                <p class="title">
                    <span class="body-2 font-weight-bold color-blue pseudo-link" @click="set_scorecard_state()">ScoreCard</span>
                </p>

                <div class="title" v-for="(item, index) in ScoreCards" :key="'score_card' + index">
                    <span class="body-2 font-weight-bold color-green">{{ item.text }}</span>
                    <v-select  
                        :items="items['Select' + item.key]" 
                        item-text="text"
                        item-value="value"
                        label="請選擇" 
                        v-model="item_params[item.param]"
                        @input="change_component('Select' + item.key + '_' + item_params[item.param])"
                    >
                    </v-select>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import display_twopicsVue from './display_twopics.vue';
import display_picVue from './display_pic.vue';
  export default {
    name: 'sidebar',
    data: function() {
        return {
            tables_array: [],

            is_scorecard: false,
            item_params: {
                'upperair': '', 'surface': '', 'ensemble': '', 'ensemble_rainfall': '',
                'anomaly': '', 'bias': '', 'rmse': '',
                'msess': '', 'rsd': '', 'emd': '',
                'epv': '', 'pcor': '', 'sfc': ''
            },

            forecast_maps: [
                {'text': 'Upper Air:', 'key': 'UpperAir', 'param': 'upperair'},
                {'text': 'Surface:', 'key': 'Surface', 'param': 'surface'},
            ],
            ensemble_tool:[
                {'text': 'Ensemble Verification:', 'key': 'Ensemble', 'param': 'ensemble'},
                {'text': 'Ensemble Rainfall Verification:', 'key': 'EnsembleRainfall', 'param': 'ensemble_rainfall'}
            ],

            ScoreCards: [
                {'text': 'Anomaly Correlation:', 'key': 'AnomalyCorrelation', 'param': 'anomaly'},
                {'text': 'Bias:', 'key': 'Bias', 'param': 'bias'},
                {'text': 'RMSE:', 'key': 'RMSE', 'param': 'rmse'},
                {'text': "Murphy's MSE Skill Score:", 'key': 'MSESS', 'param': 'msess'},
                {'text': 'Ratio of Standard Deviation:', 'key': 'RSD', 'param': 'rsd'},
                {'text': 'RMSE from Mean Difference:', 'key': 'EMD', 'param': 'emd'},
                {'text': 'RMSE from Pattern Variation:', 'key': 'EPV', 'param': 'epv'},
                {'text': 'Pattern Correlation:', 'key': 'PCOR', 'param': 'pcor'},
                {'text': 'Sfc Regional Means:', 'key': 'SFC', 'param': 'sfc'},
            ]

        }
    },
    created: function() {

    },
    computed: {
        items: function() {
            return  this.$store.getters.settings['Menu'];
        },

        item_has_data: function() {
            if (typeof this.items == 'object') {
                return true;
            }
            else {
                return false;
            }
        }
    },
    methods: {
        newWindowfunction:function(link){
            window.open(link);
        },
        
        get_default_src: function(major_type, sub_type) {
            let default_src;
            let select_items = this.$store.getters.settings['Menu'][major_type];
            for (var i=0; i<select_items.length; i++) {
                if (select_items[i]['value'] == sub_type) {
                    default_src = select_items[i]['default_src'];
                    break;
                }
            }

            return default_src;
        },

        change_component: function(component_name) {
            this.$store.dispatch('set_all_content', component_name);
            this.close_scorecard();
            
            // component_name = SelectSurface_D1
            let major_type = component_name.split('_')[0]; // SelectSurface
            let sub_type = component_name.split('_')[1]; // D1
            this.$store.dispatch('set_major_type', major_type);
            this.$store.dispatch('set_sub_type', sub_type);
            this.$store.dispatch('clear_current_srcs');
            
            if (component_name.indexOf('Surface') > -1) {
                var all_params = this.$store.getters.settings['TopMenu'][major_type][sub_type]['parameter'];
                var cols_per_table = parseInt(this.$store.getters.settings['TopMenu'][major_type][sub_type]['cols_per_table']);
                this.tables_array = [];
                var tmp_table_array = [];
                var table_count = 0;
                this.tables_array = [];
                for (var i=0; i<all_params.length; i++) {
                    if (parseInt(i / cols_per_table) != table_count) {
                        this.tables_array.push(tmp_table_array);
                        tmp_table_array = [];
                        table_count += 1;
                    }
                    tmp_table_array.push(all_params[i]);
                }
                this.tables_array.push(tmp_table_array);
                this.$store.dispatch('set_tables_array', this.tables_array);

                // get default_src
                let default_src = this.get_default_src(major_type, sub_type);
                this.$store.dispatch('set_current_srcs', [this.$store.getters.settings['General']['path'] + default_src]);
            }

            else if (component_name.indexOf('UpperAir') > -1) {
                this.$store.dispatch('set_tables_array', this.$store.getters.settings['TopMenu'][major_type][sub_type]['parameter']);

                // get default_src
                let default_src = this.get_default_src(major_type, sub_type);
                this.$store.dispatch('set_current_srcs', [this.$store.getters.settings['General']['path'] + default_src]);
            }

            else if (component_name.indexOf('Ensemble') > -1){
                let config_twopicspath = this.get_default_src(major_type, sub_type);
                let ensemble_twopic_arr = [];
                this.$store.dispatch('set_tables_array', this.$store.getters.settings['TopMenu'][major_type][sub_type]['parameter']);
                
                for (var i=0; i<config_twopicspath.length; i++) {
                    let fulltwopic_path = this.$store.getters.settings['General']['path'] + config_twopicspath[i];
                    ensemble_twopic_arr.push(fulltwopic_path);
                }
                
                this.$store.dispatch('set_current_srcs', ensemble_twopic_arr);
            }

            else if (component_name.indexOf('Ensemble_rainfall') > -1){
                let config_twopicspath = this.get_default_src(major_type, sub_type);
                let ensemble_threepic_arr = [];
                this.$store.dispatch('set_tables_array', this.$store.getters.settings['TopMenu'][major_type][sub_type]['parameter']);
                
                for (var i=0; i<config_twopicspath.length; i++) {
                    let fulltwopic_path = this.$store.getters.settings['General']['path'] + config_twopicspath[i];
                    ensemble_threepic_arr.push(fulltwopic_path);
                }
                
                this.$store.dispatch('set_current_srcs', ensemble_threepic_arr);
            }

            else if (component_name.indexOf('Select') > -1) {
                this.$store.dispatch('set_tables_array', this.$store.getters.settings['TopMenu'][major_type][sub_type]);
                
                // get default_src
                let default_src = this.get_default_src(major_type, sub_type);
                this.$store.dispatch('set_current_srcs', [ this.$store.getters.settings['General']['path'] + default_src ]);
            }

            else if(component_name.indexOf('home') >= 0) {
                this.close_scorecard();
            }

            // useless by Jimmy
            else {
                this.$store.dispatch('set_current_srcs', this.$store.getters.settings['Menu'][major_type][sub_type]['default_src']);                
            }

            
        },

        set_scorecard_state: function() {
            this.is_scorecard = !this.is_scorecard;
            this.$store.dispatch('set_scorecard', this.is_scorecard);
        },

        close_scorecard: function() {
            this.is_scorecard = false;
            this.$store.dispatch('set_scorecard', this.is_scorecard);
        }
    },
  }
</script>

<style scoped>
    .sidebar {
        width:18%;
        position:fixed;
        overflow-y: scroll;
        top: 0;
        bottom: 0;
        padding-left: 10px;
        padding-top: 10px;
        background-size: '100% 100%';  
    }

    .home {
        width:30px;
    }

    table {
        width: 100%;
        /* background: ivory ; */
        border-collapse: collapse;
        border: 0px solid #fff;
    }
    table td {
        border: 0.7px solid #444444;
        padding: 0px 1px; 
        background: ivory;
    }

    td.pic-link {
        cursor: pointer;
        text-decoration:underline;
    }

    .span-item {
        padding-right:5px;
    }

    #left-top-table td {
        text-align:center;
    }
    
    #left-top-table .link:hover {
        cursor: pointer;
    }    

    #left-top-table .invisble{
        opacity: 0;
    }
    
    #left-top-table .border {
        border-top: 0px solid #fff;
        border-left: 0px solid #fff;
    }
</style>