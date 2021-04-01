<template>
    <div class="topmenu-tables">
        <table id='top_table'>
            <tr v-for="(parameter, index) in rows" :key="index">
                <td class="row-name" style="color: #ff0000">{{parameter.text}}</td>
                <td class="pic-link" v-for="(row, index) in $store.getters.settings['TopMenu'][major_type][sub_type]['row']" :key="index" @click="change_display(parameter.filename, row.filename)">
                    <span>{{ row.text }}</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    name:'topmenu_tables',
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
        change_display: function(parameter, row) {
            console.log("topmenu can read??--topmenu",parameter); 
            var template_src_array = JSON.parse(JSON.stringify(this.$store.getters.settings['TopMenu'][this.major_type][this.sub_type]['src_template']));
            this.$store.dispatch('clear_current_srcs'); 
            var tmp_src_array = [];
            for (var i=0; i<template_src_array.length; i++) {
                var result = template_src_array[i].replace(/{parameter}/g, parameter).replace(/{row}/g, row); 
                tmp_src_array.push(this.$store.getters.settings['General']['path'] + result);                    
            }
            this.$store.dispatch('set_current_srcs', tmp_src_array);
        },        
    },  
  }
</script>

<style scoped>
    table, td {
        border: 1px solid #3a3a3a;
        border-collapse: collapse;
        padding: 5px 10px;
        background: #fff9c4;
        border: 1px solid #000000;
        padding: 10px 10px;
    }    
    #top_table{
        width: 80%;
        margin: 10px 9%;
    }

    .row-name {
        width:40px;
    }

    td.pic-link {
        cursor: pointer;
        text-decoration:underline;
    }
</style>