import Benchmark, { Event } from "benchmark";
import nock from "nock";
import {
  HTTP_BASE_URL,
  HTTPS_BASE_URL,
  PATH,
  RESPONSE_BODY,
} from "./_constants";
import axiosModels from "./axios";
import coreModels from "./core";
import corePromisifiedModels from "./core-promisified";
import fetchModels from "./fetch";
import requestModels from "./request";

const suite = new Benchmark.Suite();

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

const models = [
  ...axiosModels,
  ...coreModels,
  ...corePromisifiedModels,
  ...fetchModels,
  ...requestModels,
];

models.forEach((model) => {
  suite.add(model.target, {
    defer: true,
    fn: model.fn,
  });
});

suite
  .on("cycle", (event: Event) => {
    // tslint:disable-next-line: no-console
    console.log(event.target.toString());
  })
  .on("complete", () => {
    // tslint:disable-next-line: no-console
    console.log(`Fastest is ${suite.filter("fastest")[0].name}`);
  })
  .run({ async: true });
