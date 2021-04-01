<template>       
        <table>
            <tr>
                <td></td>
                <td  class="font-weight-bold">NH (20N-80N)</td>
                <td  class="font-weight-bold">SH (20S-80S)</td>
                <td  class="font-weight-bold">TRO (20S-20N)</td>
                <td  class="font-weight-bold">PNA</td> 
                <td  class="font-weight-bold">Globe</td>  
                <td  class="font-weight-bold">Asia</td>
            </tr>
            <tr v-for="(row, index) in rows['height']" :key="index">
                <td style="color: #ff0000">{{row.text}}</td>
                <td class="pic-link" >
                    <span class="span-item" v-for="(day, index) in rows['day']" :key="index" @click="change_display(day, row.filename, $store.getters.settings['General']['mode']+'NHX')">{{ day.text }}</span> 
                </td>
                <td class="pic-link" >
                    <span  class="span-item" v-for="(day, index) in rows['day']" :key="index" @click="change_display(day, row.filename, $store.getters.settings['General']['mode']+'SHX')">{{ day.text }}</span> 
                </td>
                <td class="pic-link" >
                    <span  class="span-item" v-for="(day, index) in rows['day']" :key="index" @click="change_display(day, row.filename, $store.getters.settings['General']['mode']+'TRO')">{{ day.text }}</span> 
                </td>
                <td class="pic-link" >
                    <span class="span-item" v-for="(day, index) in rows['day']" :key="index" @click="change_display(day, row.filename, $store.getters.settings['General']['mode']+'PNA')">{{ day.text }}</span> 
                </td>
                <td class="pic-link" >
                    <span  class="span-item" v-for="(day, index) in rows['day']" :key="index" @click="change_display(day, row.filename, $store.getters.settings['General']['mode'])">{{ day.text }}</span> 
                </td>  
                <td class="pic-link" >
                    <span  class="span-item" v-for="(day, index) in rows['day']" :key="index" @click="change_display(day, row.filename, $store.getters.settings['General']['mode']+'ASI')">{{ day.text }}</span> 
                </td>
            </tr>
        </table>
</template>

<script>
  export default {
    name:'topmenu_global_table',
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
            type:Object,
            default: {}
        }
    },
    data: function() {
        return {
            error: false,  
            single_picture_flag: true
        }
    },    
    computed: {
    },       

    methods: {
        change_display: function(day, height, location) {
            var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
            this.$store.dispatch('clear_current_srcs'); 
            var tmp_src_array = [];
            for (var i=0; i<template_src_array.length; i++) {
                //針對t-p top
                if (height == '') {
                    template_src_array[i] = template_src_array[i].replace(/{day}/g, "p{day}")
                }
                var result = template_src_array[i].replace(/{day}/g, day.filename).replace(/{height}/g, height).replace(/{location}/g, location).replace(/{folder_name}/g, day.folder_name); 
                //針對Mean
                if (height == '' && day.text == "Mean") {
                    result = result.replace(/dieoff/g, "mean")
                }

                tmp_src_array.push(this.$store.getters.settings['General']['path'] + result);                    
            }
            this.$store.dispatch('set_current_srcs', tmp_src_array);
        },        
    },  
  }
</script>

<style scoped>
    table {
        width: 100%;
        background: #fff9c4;
    }
    table, td {
        border: 1px solid #000000;
        padding: 0px 1px;    
    }

    td.pic-link {
        cursor: pointer;
        text-decoration:underline;
    }

    .span-item {
        padding-right:5px;
    }
    
</style>