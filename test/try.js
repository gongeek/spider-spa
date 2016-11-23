var Spider = require('../index');
Spider.get('http://www.iconfont.cn/plus/search/index?q=红色').then(function (data) {
    console.log(data);
},function (err) {
    console.log(err);
});
console.log('try contintue!');