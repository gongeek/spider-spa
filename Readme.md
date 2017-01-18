# spider-spa

[![npm version](https://badge.fury.io/js/spider-spa.svg)](https://badge.fury.io/js/spider-spa)

Fetch html after SPA application rendered. 

# Usage
`1.npm install spider-spa  --save`

```js
var  Spider=require('spider-spa')

Spider.get('http://alimama.com').then(function(data){
  console.log(data)
})

```

# 原理

利用phantomjs获取前端渲染完成以后的html页面.
