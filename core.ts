import http from "http";
import https from "https";
import { HOST, PATH } from "./_constants";
import { IBenchmarkModel } from "./types/benchmark-models";

const benchmarkModels: IBenchmarkModel[] = [
  {
    fn: (defer: any) => {
      http
        .request({ host: HOST, path: PATH }, (res) => {
          res.resume().on("end", () => defer.resolve());
        })
        .end();
    },
    target: "[core] http [GET]",
  },
  {
    fn: (defer: any) => {
      const req = http.request(
        { host: HOST, path: PATH, method: "POST" },
        (res) => {
          res.resume().on("end", () => defer.resolve());
        },
      );
      // req.write('');
      req.end();
    },
    target: "[core] http [POST]",
  },
  {
    fn: (defer: any) => {
      https
        .request({ host: HOST, path: PATH }, (res) => {
          res.resume().on("end", () => defer.resolve());
        })
        .end();
    },
    target: "[core] https [GET]",
  },
  {
    fn: (defer: any) => {
      const req = https.request(
        { host: HOST, path: PATH, method: "POST" },
        (res) => {
          res.resume().on("end", () => defer.resolve());
        },
      );
      // req.write('');
      req.end();
    },
    target: "[core] https [POST]",
  },
];

export default benchmarkModels;
