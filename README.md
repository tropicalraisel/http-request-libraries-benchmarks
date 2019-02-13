# HTTP Request Libraries Benchmarks

The code is benchmarking some of the most popular http request approaches and
libraries.

It compares the native http, https functions and request, node-fetch, axios
and got libraries.

Here are the results

```bash
http http GET request x 23,732 ops/sec ±1.77% (79 runs sampled)
http http POST request x 22,445 ops/sec ±5.24% (76 runs sampled)
https https GET request x 23,256 ops/sec ±2.68% (80 runs sampled)
https https POST request x 22,547 ops/sec ±2.54% (76 runs sampled)

request http GET request x 8,864 ops/sec ±4.10% (76 runs sampled)
request http POST request x 8,207 ops/sec ±2.12% (78 runs sampled)
request https GET request x 8,406 ops/sec ±2.71% (75 runs sampled)
request https POST request x 7,553 ops/sec ±1.91% (75 runs sampled)

fetch http GET request x 8,427 ops/sec ±3.82% (73 runs sampled)
fetch http GET request x 7,447 ops/sec ±3.00% (75 runs sampled)
fetch https POST request x 8,499 ops/sec ±1.97% (79 runs sampled)
fetch https POST request x 7,408 ops/sec ±2.12% (77 runs sampled)

axios http GET request x 8,506 ops/sec ±4.34% (75 runs sampled)
axios http POST request x 8,413 ops/sec ±2.16% (76 runs sampled)
axios https GET request x 8,880 ops/sec ±2.14% (78 runs sampled)
axios https POST request x 8,099 ops/sec ±1.32% (81 runs sampled)

got http GET request x 2,831 ops/sec ±5.47% (70 runs sampled)
got http POST request x 3,246 ops/sec ±2.72% (77 runs sampled)
got https GET request x 3,234 ops/sec ±2.10% (80 runs sampled)
got https POST request x 3,200 ops/sec ±2.21% (79 runs sampled)

Fastest is http http GET request
```
