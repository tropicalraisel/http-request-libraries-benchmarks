# HTTP Request Libraries Benchmarks

The code is benchmarking some of the most popular http request approaches and
libraries.

It compares the native http, https functions and request, node-fetch, axios
and got libraries.

Here are the results

```bash
[axios] http [GET] x 5,991 ops/sec ±3.67% (72 runs sampled)
[axios] http [POST] x 5,777 ops/sec ±2.43% (70 runs sampled)
[axios] https [GET] x 6,033 ops/sec ±2.35% (74 runs sampled)
[axios] https [POST] x 5,706 ops/sec ±3.93% (73 runs sampled)

[core] http [GET] x 10,950 ops/sec ±3.53% (75 runs sampled)
[core] http [POST] x 10,928 ops/sec ±1.85% (73 runs sampled)
[core] https [GET] x 11,092 ops/sec ±2.17% (68 runs sampled)
[core] https [POST] x 10,871 ops/sec ±1.65% (75 runs sampled)

[core-promisified] http [GET] x 9,974 ops/sec ±2.13% (75 runs sampled)
[core-promisified] http [POST] x 10,188 ops/sec ±1.93% (70 runs sampled)
[core-promisified] https [GET] x 10,217 ops/sec ±2.01% (70 runs sampled)
[core-promisified] https [POST] x 10,468 ops/sec ±1.50% (72 runs sampled)

[fetch] http [GET] x 10,403 ops/sec ±1.90% (76 runs sampled)
[fetch] http [POST] x 9,303 ops/sec ±1.00% (78 runs sampled)
[fetch] https [GET] x 9,742 ops/sec ±2.17% (72 runs sampled)
[fetch] https [POST] x 8,880 ops/sec ±1.68% (78 runs sampled)

[request] http [GET] x 6,685 ops/sec ±2.01% (73 runs sampled)
[request] http [POST] x 6,598 ops/sec ±1.65% (76 runs sampled)
[request] https [GET] x 6,881 ops/sec ±1.84% (71 runs sampled)
[request] https [POST] x 6,625 ops/sec ±1.63% (74 runs sampled)

Fastest is [core] https [GET]
```

## Averages

| Method           | Average  |
| ---------------- | -------- |
| Core             | 10960.25 |
| Core Promisified | 10211.75 |
| Fetch            | 9582     |
| Request          | 6697.25  |
| Axios            | 5876.75  |

## Conclusion

The slowest is Axios. Request library is 1.14 times faster than Axios.
Fetch is 1.43 times faster than Requests. Core functions wrapped in a Promise
are 1.06 times faster that Fetch. And Core functions are 1.07 times faster
compared to wrapped versions. That makes the core functions 1.86 times faster
than Axios.
