import axios from 'axios'
import {
    axiosConfig
} from '../config/axiosConfig.js'

export function read_issue_ajax(report_type) {
    this.issue_status = 'pending';
    return axios.post('/get_json/', {}, axiosConfig)
        .then(function (res) {
            if (!(res.data instanceof Object)) {
                res.data = JSON.parse(res.data);
            }
            this.items = res.data;
            this.txt_file = res.data.data['txt_file'];
            this.xml_file = res.data.data['xml_file'];
            this.issue_status = 'finished';

            if (sessionStorage.getItem("reportname") !== null) {
                const report_type_text = sessionStorage.getItem("reportname");
                this.showItems(report_type_text);
            }

        }.bind(this))
        .catch(function (error) {
            console.log(error);
        })
}


export function send_product_ajax() {
    let send_data = {
        'txt_file': this.txt_file,
        'entxt_file': this.entxt_file,
        'xml_file': this.xml_file
    };

    return axios.post('/send_product/', send_data, axiosConfig)
    .then(function (res) {
        if (!(res.data instanceof Object)) {
            res.data = JSON.parse(res.data);
        }

        if (res.data['status'] == 'success') {
            this.statusMsg = '產品成功發佈！！';
        }
        else {
            this.statusMsg = '產品發佈失敗了...';
        }

        }.bind(this))
        .catch(function (error) {
            console.log(error);
        })
}
