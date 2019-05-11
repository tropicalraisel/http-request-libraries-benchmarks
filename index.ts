import Benchmark, { Event } from 'benchmark';
import http from 'http';
import https from 'https';
import nock from 'nock';
import request from 'request';

import axios from 'axios';
// import got from 'got';
import fetch from 'node-fetch';

const HOST = 'benchmark';
const HTTP_BASE_URL = `http://${HOST}`;
const HTTPS_BASE_URL = `https://${HOST}`;

const PATH = '/run';

const RESPONSE_BODY = JSON.stringify({ message: 'Hello world' });

nock(HTTP_BASE_URL)
  .persist()
  .get(PATH)
  .reply(200, RESPONSE_BODY)
  .post(PATH)
  .reply(200, RESPONSE_BODY);

nock(HTTPS_BASE_URL)
  .persist()
  .get(PATH)
  .reply(200, RESPONSE_BODY)
  .post(PATH)
  .reply(200, RESPONSE_BODY);

const suite = new Benchmark.Suite();

// http
suite.add('http http GET request', {
  defer: true,
  fn: (defer: any) => {
    http
      .request({ host: HOST, path: PATH }, (res) => {
        res.resume().on('end', () => defer.resolve());
      })
      .end();
  },
});
suite.add('http http POST request', {
  defer: true,
  fn: (defer: any) => {
    const req = http.request(
      { host: HOST, path: PATH, method: 'POST' },
      (res) => {
        res.resume().on('end', () => defer.resolve());
      },
    );
    // req.write('');
    req.end();
  },
});

// https
suite.add('https https GET request', {
  defer: true,
  fn: (defer: any) => {
    https
      .request({ host: HOST, path: PATH }, (res) => {
        res.resume().on('end', () => defer.resolve());
      })
      .end();
  },
});
suite.add('https https POST request', {
  defer: true,
  fn: (defer: any) => {
    const req = https.request(
      { host: HOST, path: PATH, method: 'POST' },
      (res) => {
        res.resume().on('end', () => defer.resolve());
      },
    );
    // req.write('');
    req.end();
  },
});

// request
suite.add('request http GET request', {
  defer: true,
  fn: (defer: any) => {
    request.get(HTTP_BASE_URL, () => {
      defer.resolve();
    });
  },
});
suite.add('request http POST request', {
  defer: true,
  fn: (defer: any) => {
    request.post(HTTP_BASE_URL, () => {
      defer.resolve();
    });
  },
});

suite.add('request https GET request', {
  defer: true,
  fn: (defer: any) => {
    request.get(HTTPS_BASE_URL, () => {
      defer.resolve();
    });
  },
});
suite.add('request https POST request', {
  defer: true,
  fn: (defer: any) => {
    request.post(HTTPS_BASE_URL, () => {
      defer.resolve();
    });
  },
});

// fetch
suite.add('fetch http GET request', {
  defer: true,
  fn: (defer: any) => {
    fetch(`${HTTP_BASE_URL}${PATH}`)
      .then((res) => res.json())
      .then(() => defer.resolve());
  },
});
suite.add('fetch http GET request', {
  defer: true,
  fn: (defer: any) => {
    fetch(`${HTTP_BASE_URL}${PATH}`, { method: 'POST' })
      .then((res) => res.json())
      .then(() => defer.resolve());
  },
});

suite.add('fetch https POST request', {
  defer: true,
  fn: (defer: any) => {
    fetch(`${HTTPS_BASE_URL}${PATH}`)
      .then((res) => res.json())
      .then(() => defer.resolve());
  },
});
suite.add('fetch https POST request', {
  defer: true,
  fn: (defer: any) => {
    fetch(`${HTTPS_BASE_URL}${PATH}`, { method: 'POST' })
      .then((res) => res.json())
      .then(() => defer.resolve());
  },
});

// axios
suite.add('axios http GET request', {
  defer: true,
  fn: (defer: any) => {
    axios.get(`${HTTP_BASE_URL}${PATH}`).then(() => defer.resolve());
  },
});
suite.add('axios http POST request', {
  defer: true,
  fn: (defer: any) => {
    axios.post(`${HTTP_BASE_URL}${PATH}`).then(() => defer.resolve());
  },
});

suite.add('axios https GET request', {
  defer: true,
  fn: (defer: any) => {
    axios.get(`${HTTPS_BASE_URL}${PATH}`).then(() => defer.resolve());
  },
});
suite.add('axios https POST request', {
  defer: true,
  fn: (defer: any) => {
    axios.post(`${HTTPS_BASE_URL}${PATH}`).then(() => defer.resolve());
  },
});

// // got
// suite.add('got http GET request', {
//   defer: true,
//   fn: (defer: any) => {
//     got.get(`${HTTP_BASE_URL}${PATH}`).then(() => defer.resolve());
//   },
// });
// suite.add('got http POST request', {
//   defer: true,
//   fn: (defer: any) => {
//     got.post(`${HTTP_BASE_URL}${PATH}`).then(() => defer.resolve());
//   },
// });

// suite.add('got https GET request', {
//   defer: true,
//   fn: (defer: any) => {
//     got.get(`${HTTPS_BASE_URL}${PATH}`).then(() => defer.resolve());
//   },
// });
// suite.add('got https POST request', {
//   defer: true,
//   fn: (defer: any) => {
//     got.post(`${HTTPS_BASE_URL}${PATH}`).then(() => defer.resolve());
//   },
// });

suite
  .on('cycle', (event: Event) => {
    // tslint:disable-next-line: no-console
    console.log(event.target.toString());
  })
  .on('complete', () => {
    // tslint:disable-next-line: no-console
    console.log(`Fastest is ${suite.filter('fastest')[0].name}`);
  })
  .run({ async: true });
