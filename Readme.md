# spider-spa

[![npm version](https://badge.fury.io/js/spider-spa.svg)](https://badge.fury.io/js/spider-spa)

Fetch html after SPA application rendered  

# Usage
`1.you need Install phantomjs`

`2.npm install spider-spa  --save`

```js
var  Spider=require('spider-spa')

Spider.get('http://alimama.com').then(function(data){
  console.log(data)
})

```

