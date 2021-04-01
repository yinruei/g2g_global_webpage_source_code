import "vuetify/dist/vuetify.min.css";

import Vue from "vue"
import App from "./app.vue"
import store from './store/store.js'
import '@babel/polyfill'
import Vuetify from "vuetify"
import router from './router'
import promise from 'es6-promise'
promise.polyfill();

import jsyaml from "js-yaml"


Vue.use(Vuetify)


function read_yaml(file_name) {
    // Get document, or throw exception on error
    try {
        let doc = jsyaml.load(file_name);
        let doc_str = JSON.stringify(doc);
        doc_str = doc_str.replace(/{=MODE=}/g,doc['General']['mode']);
        store.dispatch('set_settings', JSON.parse(doc_str));
    } catch (e) {
        console.log(e);
    }
}

function read_text_file(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                read_yaml(allText);
            }
        }
    }
    rawFile.send();
}

Vue.directive('focus', {
    inserted: function(el) {
        el.focus()
    }
})

new Vue({
    el: '#app',
    store,
    components:{ 'App':App},
    router,
    created: function() {
        read_text_file('./config/config.yaml');

        
      },
      methods: {
      }    
})



