import Vue from 'vue'
import Vuex from 'vuex'
import promise from 'es6-promise'
promise.polyfill();

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        top_content:'home',
        display_content:'home',
        current_srcs: [],
        settings: {},
        tables_array: [],
        major_type: '',
        sub_type: '',
        is_scorecard: false,
    },
    mutations:{
        SET_TOP_CONTENT: function(state, new_top_content) {
            state.top_content = new_top_content
        },
        SET_DISPLAY_CONTENT: function(state, new_display_content) {
            state.display_content = new_display_content
        },
        SET_CURRENT_SRCS: function(state, new_pic_array) {
            state.current_srcs = new_pic_array
        },
        CLEAR_CURRENT_SRCS: function(state) {
            state.current_srcs = [];
        },
        SET_SETTINGS: function(state, settings) {
            state.settings = settings;
        },
        SET_TABLES_ARRAY: function(state, tables_array) {
            state.tables_array = tables_array;
        },
        SET_MAJOR_TYPE: function(state, major_type) {
            state.major_type = major_type
        },
        SET_SUB_TYPE: function(state, sub_type) {
            state.sub_type = sub_type
        },
        SET_SCORECARD: function(state, is_scorecard) {
            state.is_scorecard = is_scorecard
        }   
    },
    actions: {
        set_top_content: function(context, payload) {
            context.commit('SET_TOP_CONTENT', payload);
        },
        set_display_content: function(context, payload) {
            context.commit('SET_DISPLAY_CONTENT', payload);
        },
        set_all_content: function(context, payload) {
            context.commit('SET_TOP_CONTENT', payload);
            context.commit('SET_DISPLAY_CONTENT', payload);            
        },
        set_current_srcs: function (context, payload) {
            context.commit('SET_CURRENT_SRCS', payload);
        },
        clear_current_srcs: function (context, payload) {
            context.commit('CLEAR_CURRENT_SRCS');
        },
        set_settings: function(context, payload) {
            context.commit('SET_SETTINGS', payload);
        },
        set_tables_array: function(context, payload) {
            context.commit('SET_TABLES_ARRAY', payload);
        },
        set_major_type: function(context, payload) {
            context.commit('SET_MAJOR_TYPE', payload);
        },
        set_sub_type: function(context, payload) {
            context.commit('SET_SUB_TYPE', payload);
        },
        set_scorecard: function(context, payload) {
            context.commit('SET_SCORECARD', payload)
        }
      
    },
    getters: {
        top_content: function(state) {
            return state.top_content
        },        
        display_content: function(state) {
            return state.display_content
        },
        current_srcs: function(state) {
            return state.current_srcs
        },
        settings: function(state) {
            return state.settings
        },
        tables_array: function(state) {
            return state.tables_array
        },
        major_type: function(state) {
            return state.major_type
        },
        sub_type: function(state) {
            return state.sub_type
        },
        is_scorecard: function(state) {
            return state.is_scorecard
        }
               
    }
})