var Spider = require('../index');
Spider.get('http://iconfont.cn/plus').then(function (data) {
    console.log(data);
},function (err) {
    console.log(err);
});
Spider.get('http://iconfont.cn/plus/help/index').then(function (data) {
    console.log(data);
},function (err) {
    console.log(err);
});
console.log('try contintue!');