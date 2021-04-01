http = require('http');
url = require('url');


var host = '127.0.0.1'
var port = 23456;

var cors = require('cors')
var express = require('express')

var app = express()
app.use(cors())

var session = require('express-session');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use('/cls/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Request-Method', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    // res.send({"is_auth": false, "is_staff":false, 'name':'testuser'});
    res.send({"is_auth": true, "is_staff":false, 'name':'testuser'});

})  


app.use('/logout/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Request-Method', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'POST') {
        res.send({"status": "success"});
    }
})  


app.use('/login/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Request-Method', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'POST') {
        if (req.body.username == 'test' && req.body.password == 'test') {
            res.send({"status": "success", "name":"ccc", "is_staff":false, "is_auth":true });
        } else if (req.body.username == 'ccc' && req.body.password == 'cccc') {
            res.send({"status": "success", "name":"ccc", "is_staff":true, "is_auth":true });
        } else {
            res.send({"status": "success", "is_staff":false, "is_auth":false });
        }
    }
}
)


app.use('/register/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Request-Method', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'POST') {
        res.send({"status": "failed", "failed_code": "username"});
        //res.send({"status": "failed", "failed_code": "email"});
        //res.send({"status": "success"});
    }
}
)


app.use('/get_json/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Request-Method', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'POST') {
        res.send({"status": "success", "failed_code": "", "data": {"encontent": "1. Taipei City-\n\n...H in effect from late this morning (04/19) through\nlate this afternoon (04/19)...\n\n2. Hsinchu City-Keelung City-\n\n...H in effect from late this morning (04/19) through\nlate this afternoon (04/19)...\n\n3. Miaoli County-Taoyuan City-New Taipei City-\nHsinchu County-\n\n...H in effect from late this morning (04/19) through\nlate this afternoon (04/19)...\n\n\n------ Summary of Warning Areas ------\n[Yellow Heat Advisory areas]\nMiaoli County-Taoyuan City-New Taipei City-\nHsinchu County-\n\n[Orange Heat Advisory areas]\nHsinchu City-Keelung City-\n\n[Red Heat Advisory areas]\nTaipei City-\n\n\n  ", "name": "紅色高溫特報", "sms": "由於受太平洋高壓影響，今（１９）日至２２日基隆市及苗栗以北局部地區為高溫紅色或橘色預警，有連續出現３８度極端高溫的機率。區域詳見氣象局網頁： http://www.cwb.gov.tw/m/w/W26.htm", "chcontent": "\n由於受太平洋高壓影響，今（１９）日至２２日基隆市及苗栗以北局部地區為高溫紅色或橘色預警，有連續出現３８度極端高溫的機率，受影響區域詳述如下。\n\n", "starttime": "107年04月19日10時41分", "precautions": "長時間連續極端高溫，請注意防曬、多補充水分、慎防熱傷害；室內應注意通風及適時降溫，節約能源，並避免戶外高溫下勞動或運動。", "endtime": "107年04月19日18時00分", "issuetime": "107年04月19日10時40分" , "warning_area": "this is the warning area 030","txt_file":"123","xml_file":"456"}});
    }
}
)


app.use('/send_product/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Request-Method', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'POST') {
        res.send({"status": "success"});
    }
}
)



app.listen(port,(err) => {
    if (err) {
        return console.log('bad');
    }
})




