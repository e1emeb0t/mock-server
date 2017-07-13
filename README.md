# Eleme Mock Server

[![](https://img.shields.io/npm/v/eleme-mock-server.svg)](https://www.npmjs.com/package/eleme-mock-server)
[![](https://img.shields.io/npm/dm/eleme-mock-server.svg)](https://www.npmjs.com/package/eleme-mock-server)

The offical javascript sdk, based on the awesome [axios](https://github.com/mzabriskie/axios).

Usage
=======

```bash
npm i eleme-mock-server --save
```

then import in your project, `Mock(cluster, config)` will return an axios instance, checkout the methods [here](https://github.com/mzabriskie/axios#instance-methods).

* cluster [String]: your project's mock cluster.
* config [Object]: axios config, see the details [here](https://github.com/mzabriskie/axios#request-config).

```js
import Mock from 'eleme-mock-server';

Mock('your-mock-cluster', {
  baseURL: 'https://some-domain.com/api/'
}).get('/user/e1emeb0t').then(result => {

}).catch(error => {

});
```
