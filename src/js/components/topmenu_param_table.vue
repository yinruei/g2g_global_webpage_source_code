<template>       
        <table>
            <tr>
                <td class="pic-link" v-for="(parameter, index) in rows" :key="index" :style="{background: parameter.color }">
                    <span  class="span-item" @click="change_display(parameter.filename)">{{ parameter.text }}</span>
                </td>
            </tr>
        </table>
</template>

<script>
  export default {
    name:'topmenu_param_table',
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
        }
    },
    computed: {
    },

    methods: {
        change_display: function(parameter) {
            var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
            this.$store.dispatch('clear_current_srcs'); 
            var tmp_src_array = [];
            for (var i=0; i<template_src_array.length; i++) {
                var result = template_src_array[i].replace(/{parameter}/g, parameter); 
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
    }
    table, td {
        border-collapse: collapse;
        padding: 2px 5px;
        table-layout: fixed;
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