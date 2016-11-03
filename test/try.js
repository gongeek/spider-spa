var Spider = require('../index');
Spider.get('http://iconfont.cn').then(function (data) {
    console.log(data);
},function (err) {
    console.log(err);
});
console.log('try contintue!');