<template>
    <div class="topmenu-tables_Ensemble">
        <table id='top_table' v-if="major_type === 'SelectEnsembleRainfall' && sub_type === 'CRPS/RMSE/MERR'">
            <tr>
                <td  
                    v-for="(parameter, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['parameter']" 
                    :key="index"
                    class="font-weight-bold" 
                    @click="change_display(index,parameter.filename,'',sub_type)"
                >
                    <span>{{ parameter.text }}</span>
                </td>
            </tr>
        </table>

        
        <table id='top_table' v-else-if="major_type === 'SelectEnsembleRainfall' && sub_type !== 'reli'">
            <tr>
                <td  class="font-weight-bold">North Hemisphere(20N-80N)</td>
                <td  class="font-weight-bold">Tropical(20S-20N)</td>
                <td  class="font-weight-bold">South Hemisphere(20S-80S)</td>
                <td  class="font-weight-bold">East Asia(5S-55N,60E-180E)</td>  
                <td  class="font-weight-bold">COUNS(20N-75N, 40W-0W)</td>
                <td  class="font-weight-bold">Taiwan Region(15N-30N, 110E-130E)</td>
            </tr>
            <tr v-for="(row, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['row']" :key="index">
                <td  class="pic-link" >
                    <span class="span-item"  @click="change_display(index,'NHX',row.filename,sub_type)">{{ row.text }}</span> 
                </td>
                <td  class="pic-link" >
                    <span class="span-item"  @click="change_display(index,'TRO',row.filename,sub_type)">{{ row.text }}</span> 
                </td>
                <td  class="pic-link" >
                    <span class="span-item"  @click="change_display(index,'SHX',row.filename,sub_type)">{{ row.text }}</span> 
                </td>
                <td  class="pic-link" >
                    <span class="span-item"  @click="change_display(index,'ASI',row.filename,sub_type)">{{ row.text }}</span> 
                </td>
                <td  class="pic-link" >
                    <span class="span-item"  @click="change_display(index,'PNA',row.filename,sub_type)">{{ row.text }}</span> 
                </td>
                <td  class="pic-link" >
                    <span class="span-item"  @click="change_display(index,'TWD',row.filename,sub_type)">{{ row.text }}</span> 
                </td>
            </tr>
        </table>

    <!-- RELI finished-->
        <div id='top_table' v-else-if="major_type === 'SelectEnsembleRainfall' && sub_type === 'reli'">
            <table>
                <tr>
                    <td  class="font-weight-bold">Region</td>
                    <td  class="font-weight-bold">North Hemisphere(20N-80N)</td>
                    <td  class="font-weight-bold">Tropical(20S-20N)</td>
                    <td  class="font-weight-bold">South Hemisphere(20S-80S)</td>
                </tr>
                <tr v-for="(row, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['row']" :key="index">
                    <td>{{row.text}}</td>
                    <td class="pic-link" >
                        <span class="span-item" v-for="(day, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['day']" :key="index" @click="change_display(sub_type,'NHX', row.filename, day.filename)">{{ day.text }}</span> 
                    </td>
                    <td class="pic-link" >
                        <span  class="span-item" v-for="(day, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['day']" :key="index" @click="change_display(sub_type, 'TRO', row.filename, day.filename)">{{ day.text }}</span> 
                    </td>
                    <td class="pic-link" >
                        <span  class="span-item" v-for="(day, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['day']" :key="index" @click="change_display(sub_type, 'SHX', row.filename, day.filename)">{{ day.text }}</span> 
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td  class="font-weight-bold">Region</td> 
                    <td  class="font-weight-bold">East Asia(5S-55N,60E-180E)</td>  
                    <td  class="font-weight-bold">COUNS(20N-75N, 40W-0W)</td>
                    <td  class="font-weight-bold">Taiwan Region(15N-30N, 110E-130E)</td>
                </tr>
                <tr v-for="(row, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['row']" :key="index">
                    <td>{{row.text}}</td>
                    <td class="pic-link" >
                        <span class="span-item" v-for="(day, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['day']" :key="index" @click="change_display(sub_type,'ASI', row.filename, day.filename)">{{ day.text }}</span> 
                    </td>
                    <td class="pic-link" >
                        <span  class="span-item" v-for="(day, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['day']" :key="index" @click="change_display(sub_type,'PNA', row.filename, day.filename)">{{ day.text }}</span> 
                    </td>
                    <td class="pic-link" >
                        <span  class="span-item" v-for="(day, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['day']" :key="index" @click="change_display(sub_type,'TWD', row.filename, day.filename)">{{ day.text }}</span> 
                    </td>
                    
                </tr>
            </table>
        </div>
        <table id='top_table' v-else>
            <td  v-for="(parameter, index1) in $store.getters.settings['TopMenu'][major_type][sub_type]['parameter']" :key="index1" class="font-weight-bold" @click="change_display_Ensemble(parameter)">
                 <span>{{parameter.text}}</span>
                <tr v-for="(row, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['row']" :key="index" >
                    <div :colspan="row.colspan" 
                        class="pic-link" 
                        @click="change_display_Ensemble(index, parameter.filename, row.filename,sub_type)">
                        <span>{{ row.text }}</span>
                    </div>
                </tr>
            </td>
        </table>
    </div>
</template>

<script>
  export default {
    name:'topmenu_tables_Ensemble',
    data: function() {
        return {
            error: false,  
        }
    },
    props:  {
        major_type: {
            type: String,
            default: ''
        },
        sub_type: {
            type:String,
            default: ''
        },
        rows: {
            type:Array,
            default: []
        },

        picnumcheck: {
            type:String,
            default: ''
        },


    },
    computed: {
        component_name: function() {
            if (this.sub_type == 'CRPS/RMSE/MERR'){
                return this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['parameter'];
            }
            else if (this.sub_type === 'reli'){
                return this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['day'];
            }
            else {
                return this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['row'];
            }
        },
    },       

    methods: {
        // 判斷單張兩張圖或三張圖檔格式
        change_display_Ensemble: function(index, parameter, row, sub_type) {
            let component_name = this.component_name[index];
            let variables = sub_type;
            if (Object.keys(component_name).indexOf('filename_second') != -1) {
                this.$store.dispatch('set_display_content', 'filename_second');
                //for two pisc path.
                let row1 = component_name['filename'];
                let row2 = component_name['filename_second'];
                
                var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
                this.$store.dispatch('clear_current_srcs'); 
                var tmp_src_array = [];
                for (var i=0; i<template_src_array.length; i++) {
                        var result1 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row1); 
                        var result2 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row2); 
                    tmp_src_array.push(this.$store.getters.settings['General']['path'] + result1,this.$store.getters.settings['General']['path'] + result2);
                }
                this.$store.dispatch('set_current_srcs', tmp_src_array);
            }
            
            else {
                this.$store.dispatch('set_display_content', 'filename_single');
                var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
                this.$store.dispatch('clear_current_srcs'); 
                var tmp_src_array = [];
                for (var i=0; i<template_src_array.length; i++) {
                    if (index === 'reli'){
                        var result = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{day}/g,variables).replace(/{row}/g, row);
                    }
                    else {
                        var result = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row);
                    }
                    tmp_src_array.push(this.$store.getters.settings['General']['path'] + result);
                    }
                this.$store.dispatch('set_current_srcs', tmp_src_array);
            }
        },
    
        change_display: function(index, parameter, row, sub_type) {
            if(index !== 'reli'){
                let component_name = this.component_name[index];
                let variables = sub_type;
                if (Object.keys(component_name).indexOf('filename_second') !== -1) {
                    
                    this.$store.dispatch('set_display_content', 'filename_second');
                    //for two pisc path.
                    let row1 = component_name['filename'];
                    let row2 = component_name['filename_second'];
                    
                    var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
                    this.$store.dispatch('clear_current_srcs'); 
                    var tmp_src_array = [];
                    for (var i=0; i<template_src_array.length; i++) {
                            var result1 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row1); 
                            var result2 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row2); 
                        tmp_src_array.push(this.$store.getters.settings['General']['path'] + result1,this.$store.getters.settings['General']['path'] + result2);
                    }
                    this.$store.dispatch('set_current_srcs', tmp_src_array);
                }
                else if (Object.keys(component_name).indexOf('filename_2nd') !== -1) {
                    this.$store.dispatch('set_display_content', 'filename_2nd');
                    //for two pisc path.
                    let row1 = component_name['filename'];
                    let row2 = component_name['filename_2nd'];
                    let row3 = component_name['filename_3rd'];
                    
                    
                    var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
                    this.$store.dispatch('clear_current_srcs'); 
                    var tmp_src_array = [];
                    for (var i=0; i<template_src_array.length; i++) {
                            var result1 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row1); 
                        tmp_src_array.push(this.$store.getters.settings['General']['path'] + result1);
                    }
                    this.$store.dispatch('set_current_srcs', tmp_src_array);
                }
                else {
                    this.$store.dispatch('set_display_content', 'filename_single');
                    var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
                    this.$store.dispatch('clear_current_srcs'); 
                    var tmp_src_array = [];
                    for (var i=0; i<template_src_array.length; i++) {
                        if (index === 'reli'){
                            var result = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{day}/g,variables).replace(/{row}/g, row);
                        }
                        else {
                            var result = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row);
                        }
                        tmp_src_array.push(this.$store.getters.settings['General']['path'] + result);
                        }
                    this.$store.dispatch('set_current_srcs', tmp_src_array);
                }
            }
            else{
                let component_name = this.component_name;
                let variables = sub_type;
                if (Object.keys(component_name).indexOf('filename_second') !== -1) {
                    
                    this.$store.dispatch('set_display_content', 'filename_second');
                    //for two pisc path.
                    let row1 = component_name['filename'];
                    let row2 = component_name['filename_second'];
                    
                    var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
                    this.$store.dispatch('clear_current_srcs'); 
                    var tmp_src_array = [];
                    for (var i=0; i<template_src_array.length; i++) {
                            var result1 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row1); 
                            var result2 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row2); 
                        tmp_src_array.push(this.$store.getters.settings['General']['path'] + result1,this.$store.getters.settings['General']['path'] + result2);
                    }
                    this.$store.dispatch('set_current_srcs', tmp_src_array);
                }
                else if (Object.keys(component_name).indexOf('filename_2nd') !== -1) {
                    this.$store.dispatch('set_display_content', 'filename_2nd');
                    //for two pisc path.
                    let row1 = component_name['filename'];
                    let row2 = component_name['filename_2nd'];
                    let row3 = component_name['filename_3rd'];
                    
                    
                    var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
                    this.$store.dispatch('clear_current_srcs'); 
                    var tmp_src_array = [];
                    for (var i=0; i<template_src_array.length; i++) {
                            var result1 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row1); 
                            var result2 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row2); 
                            var result3 = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row3); 
                        tmp_src_array.push(this.$store.getters.settings['General']['path'] + result1,this.$store.getters.settings['General']['path'] + result2,this.$store.getters.settings['General']['path'] + result3);                    
                    }
                    this.$store.dispatch('set_current_srcs', tmp_src_array);
                }
                else {
                    this.$store.dispatch('set_display_content', 'filename_single');
                    var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
                    this.$store.dispatch('clear_current_srcs'); 
                    var tmp_src_array = [];
                    for (var i=0; i<template_src_array.length; i++) {
                        if (index === 'reli'){
                            var result = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{day}/g,variables).replace(/{row}/g, row);
                        }
                        else {
                            var result = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{variables}/g,variables).replace(/{row}/g, row);
                        }
                        tmp_src_array.push(this.$store.getters.settings['General']['path'] + result);
                        }
                    this.$store.dispatch('set_current_srcs', tmp_src_array);
                }
            }
        },
    },  
  }
</script>

<style scoped>
    table, td {
        border: 1px solid #3a3a3a;
        background: #fff9c4;
        border-collapse: collapse;
        padding: 5px 10px;
        text-align: center;
        
    }    
    #top_table, tr{
        width: 80%;
        margin: 10px 9%;
    }
    .row-name {
        width:40px;
    }

    .pic-link {
        cursor: pointer;
        text-decoration: underline;
        border-top: 0.5px #000 solid;
        border-bottom: 0.5px #000 solid;
        width: 300px;
    }

    .span-item {
        padding-right:5px;
    }
</style>