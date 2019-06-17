import request from "request";
import { HTTP_BASE_URL, HTTPS_BASE_URL } from "./_constants";
import { IBenchmarkModel } from "./types/benchmark-models";

const benchmarkModels: IBenchmarkModel[] = [
  {
    fn: (defer: any) => {
      request.get(HTTP_BASE_URL, () => defer.resolve());
    },
    target: "[request] http [GET]",
  },
  {
    fn: (defer: any) => {
      request.post(HTTP_BASE_URL, () => defer.resolve());
    },
    target: "[request] http [POST]",
  },
  {
    fn: (defer: any) => {
      request.get(HTTPS_BASE_URL, () => defer.resolve());
    },
    target: "[request] https [GET]",
  },
  {
    fn: (defer: any) => {
      request.post(HTTPS_BASE_URL, () => defer.resolve());
    },
    target: "[request] https [POST]",
  },
];

export default benchmarkModels;
