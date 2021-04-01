<template>       
        <table>
            <tr>
                <td></td>
                <td  class="font-weight-bold">Time Series for Fcst Day</td>
                <td class="font-weight-bold">Mean</td>
            </tr>
            <tr v-for="(location, index) in rows['location']" :key="index">
                <td style="color: #ff0000">{{location.text}}</td>
                <td class="pic-link" >
                    <span class="inside-td" v-for="(day, index) in rows['day']" :key="index" @click="change_display(day, location.filename)">{{ day.text }}&nbsp;</span> 
                </td>
                <td class="pic-link">
                    <span class="inside-td" v-for="(mean, index) in rows['mean']" :key="index" @click="change_display(mean, location.filename)">mean</span>
                </td>
            </tr>
        </table>
</template>

<script>
  export default {
    name:'topmenu_sfcmean_table',
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
            type:Object,
            default: {}
        }
    },
    computed: {
    },

    methods: {
        change_display: function(day, location) {
            var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
            this.$store.dispatch('clear_current_srcs'); 
            var tmp_src_array = [];
            for (var i=0; i<template_src_array.length; i++) {
                var result = template_src_array[i].replace(/{day}/g, day.filename).replace(/{location}/g, location); 
                tmp_src_array.push(this.$store.getters.settings['General']['path'] + result);
            }
            this.$store.dispatch('set_current_srcs', tmp_src_array);
        },
    },  
  }
</script>

<style scoped>
    table {
        background: #fff9c4;
        table-layout: fixed;
    }
    table, td {
        border: 1px solid #000000;
        border-collapse: collapse;
        padding: 2px 10px;
        
    }

    td.pic-link {
        cursor: pointer;
        text-decoration:underline;
    }

    .inside-td {
        padding: 0 5px;
        padding-right:5px;
    }


</style>