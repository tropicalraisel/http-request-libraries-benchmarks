import axios from "axios";
import { HTTP_BASE_URL, HTTPS_BASE_URL, PATH } from "./_constants";
import { IBenchmarkModel } from "./types/benchmark-models";

const benchmarkModels: IBenchmarkModel[] = [
  {
    fn: async (defer: any) => {
      await axios.get(`${HTTP_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[axios] http [GET]",
  },
  {
    fn: async (defer: any) => {
      await axios.post(`${HTTP_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[axios] http [POST]",
  },
  {
    fn: async (defer: any) => {
      await axios.get(`${HTTPS_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[axios] https [GET]",
  },
  {
    fn: async (defer: any) => {
      await axios.get(`${HTTPS_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[axios] https [POST]",
  },
];

export default benchmarkModels;
