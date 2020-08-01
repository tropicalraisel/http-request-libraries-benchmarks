import got from "got";
import { HTTP_BASE_URL, HTTPS_BASE_URL, PATH } from "./_constants";
import { IBenchmarkModel } from "./types/benchmark-models";

const benchmarkModels: IBenchmarkModel[] = [
  {
    fn: async (defer: any) => {
      await got.get(`${HTTP_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[got] http [GET]",
  },
  {
    fn: async (defer: any) => {
      await got.post(`${HTTP_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[got] http [POST]",
  },
  {
    fn: async (defer: any) => {
      await got.get(`${HTTPS_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[got] https [GET]",
  },
  {
    fn: async (defer: any) => {
      await got.get(`${HTTPS_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[got] https [POST]",
  },
];

export default benchmarkModels;
