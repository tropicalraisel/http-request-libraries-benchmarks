import fetch from "node-fetch";
import { HTTP_BASE_URL, HTTPS_BASE_URL, PATH } from "./_constants";
import { IBenchmarkModel } from "./types/benchmark-models";

const benchmarkModels: IBenchmarkModel[] = [
  {
    fn: async (defer: any) => {
      await fetch(`${HTTP_BASE_URL}${PATH}`);
      // await result.json();
      defer.resolve();
    },
    target: "[fetch] http [GET]",
  },
  {
    fn: async (defer: any) => {
      await fetch(`${HTTP_BASE_URL}${PATH}`, { method: "POST" });
      // await result.json();
      defer.resolve();
    },
    target: "[fetch] http [POST]",
  },
  {
    fn: async (defer: any) => {
      await fetch(`${HTTPS_BASE_URL}${PATH}`);
      // await result.json();
      defer.resolve();
    },
    target: "[fetch] https [GET]",
  },
  {
    fn: async (defer: any) => {
      await fetch(`${HTTPS_BASE_URL}${PATH}`, {
        method: "POST",
      });
      // await result.json();
      defer.resolve();
    },
    target: "[fetch] https [POST]",
  },
];

export default benchmarkModels;
