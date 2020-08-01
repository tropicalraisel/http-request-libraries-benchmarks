# HTTP Request Libraries Benchmarks

The code is benchmarking some of the most popular http request approaches and
libraries.

It compares the native http, https functions and request, node-fetch, axios
and got libraries.

Here are the results

```bash
[axios] http [GET] x 7,221 ops/sec ±5.81% (72 runs sampled)
[axios] http [POST] x 7,535 ops/sec ±3.05% (74 runs sampled)
[axios] https [GET] x 7,516 ops/sec ±3.05% (72 runs sampled)
[axios] https [POST] x 7,775 ops/sec ±2.11% (77 runs sampled)

[got] http [GET] x 3,269 ops/sec ±3.73% (70 runs sampled)
[got] http [POST] x 3,480 ops/sec ±2.01% (77 runs sampled)
[got] https [GET] x 3,561 ops/sec ±2.15% (75 runs sampled)
[got] https [POST] x 3,641 ops/sec ±1.96% (76 runs sampled)

[core] http [GET] x 12,941 ops/sec ±2.32% (76 runs sampled)
[core] http [POST] x 12,803 ops/sec ±2.33% (75 runs sampled)
[core] https [GET] x 12,905 ops/sec ±2.50% (74 runs sampled)
[core] https [POST] x 12,578 ops/sec ±2.39% (75 runs sampled)

[core-promisified] http [GET] x 11,576 ops/sec ±2.33% (71 runs sampled)
[core-promisified] http [POST] x 11,600 ops/sec ±1.99% (73 runs sampled)
[core-promisified] https [GET] x 11,542 ops/sec ±1.95% (73 runs sampled)
[core-promisified] https [POST] x 11,344 ops/sec ±2.22% (72 runs sampled)

[fetch] http [GET] x 7,059 ops/sec ±3.93% (72 runs sampled)
[fetch] http [POST] x 6,998 ops/sec ±2.15% (74 runs sampled)
[fetch] https [GET] x 7,108 ops/sec ±2.35% (72 runs sampled)
[fetch] https [POST] x 6,784 ops/sec ±2.29% (73 runs sampled)

[request] http [GET] x 8,905 ops/sec ±2.81% (73 runs sampled)
[request] http [POST] x 8,785 ops/sec ±3.56% (72 runs sampled)
[request] https [GET] x 8,914 ops/sec ±2.47% (76 runs sampled)
[request] https [POST] x 8,882 ops/sec ±1.98% (74 runs sampled)

Fastest is [core] http [GET]
```
