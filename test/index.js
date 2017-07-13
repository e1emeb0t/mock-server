const assert = require('assert');
const http = require('http');
const url = require('url');

import mock from '../src';

describe('mock(cluster)', () => {
  const cluster = 'alpha-1';
  const port = 12345;

  beforeEach(done => {
    http.createServer((req, res) => {
      res.end(JSON.stringify({
        url: url.parse(req.url, true)
      }));
    }).listen(port, done);
  })

  it('should request with query::mockCluster', done => {
    mock(cluster).get(`http://localhost:${port}`).then(result => {
      done(assert.equal(result.data.url.query.mockCluster, cluster))
    }).catch(done);
  });
});
