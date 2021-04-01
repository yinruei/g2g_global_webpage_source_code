import axios from 'axios'
import {
    axiosConfig
} from '../config/axiosConfig.js'

export function login_ajax(user, password) {
    let send_data = {
        'username': user,
        'password': password
    };

    return axios.post('/login/', send_data, axiosConfig)
        .then(function (res) {
            if (!(res.data instanceof Object)) {
                res.data = JSON.parse(res.data);
            }
            if (res['data']['status'] == 'success') {
                const res_data = res['data'];
                this.$store.dispatch('set_auth_state', res_data['is_auth']);
                if (res_data['is_auth']) {
                    this.$store.dispatch('set_username', res_data['name']);
                    this.$store.dispatch('set_staff_state', res_data['is_staff']);
                    //this.read_issue_ajax.call(this, 'default');
                } else {
                    this.show_failed_login_hint = true;              
                }
                
            } else {
                this.show_failed_login_hint = true;
            }


        }.bind(this))
        .catch(function (error) {
            console.log(error);
        })

}

export function logout_ajax() {
    return axios.post('/logout/', {}, axiosConfig)
        .then(function (res) {
            if (!(res.data instanceof Object)) {
                res.data = JSON.parse(res.data);
            }            
            if (res['data']['status'] == 'success') {
                const res_data = res['data']
                this.$store.dispatch('set_username', '');
                this.$store.dispatch('set_auth_state', false);
                this.$store.dispatch('set_staff_state', false);
            }
            this.$store.dispatch('set_login_page_state', true);
            this.$router.push({ path: '/' });
            location.reload()

        }.bind(this))
        .catch(function (error) {
            console.log(error);
        })

}

export function check_logged_state_ajax() {
    let send_data = {
    };

    return axios.post('/cls/', send_data, axiosConfig)
        .then(function (res) {
            if (!(res.data instanceof Object)) {
                res.data = JSON.parse(res.data);
            }                 
            if (res['data']['is_auth']) {
                const res_data = res['data'];
                this.$store.dispatch('set_username', res_data['name']);
                this.$store.dispatch('set_auth_state', res_data['is_auth']);
                this.$store.dispatch('set_staff_state', res_data['is_staff']);
            } else {
                this.$store.dispatch('set_login_page_state', true);
            } 


        }.bind(this))
        .catch(function (error) {
            console.log(error);
        })

}
