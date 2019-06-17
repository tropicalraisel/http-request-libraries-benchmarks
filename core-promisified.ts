import http from "http";
import https from "https";
import { HTTP_BASE_URL, HTTPS_BASE_URL, PATH } from "./_constants";
import { IBenchmarkModel } from "./types/benchmark-models";

// Promisification is based on
// https://runkit.com/gevorggalstyan/standard-http-https-wrapped-inside-a-promise

const request = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  postData?: any,
) => {
  const lib = url.startsWith("https://") ? https : http;

  const [h, path] = url.split("://")[1].split("/");
  const [host, port] = h.split(":");

  const params = {
    host,
    method,
    path: `/${path}` || "/",
    port: port || url.startsWith("https://") ? 443 : 80,
  };

  return new Promise((resolve, reject) => {
    const req = lib.request(params, (res) => {
      if (
        res.statusCode == null ||
        res.statusCode < 200 ||
        res.statusCode >= 300
      ) {
        return reject(new Error(`Status Code: ${res.statusCode}`));
      }

      const data: any[] = [];

      res.on("data", (chunk) => {
        data.push(chunk);
      });

      res.on("end", () => resolve(Buffer.concat(data).toString()));
    });

    req.on("error", reject);

    if (postData) {
      req.write(postData);
    }

    // IMPORTANT
    req.end();
  });
};

const benchmarkModels: IBenchmarkModel[] = [
  {
    fn: async (defer: any) => {
      await request(`${HTTP_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[core-promisified] http [GET]",
  },
  {
    fn: async (defer: any) => {
      await request(`${HTTP_BASE_URL}${PATH}`, "POST");
      defer.resolve();
    },
    target: "[core-promisified] http [POST]",
  },
  {
    fn: async (defer: any) => {
      await request(`${HTTPS_BASE_URL}${PATH}`);
      defer.resolve();
    },
    target: "[core-promisified] https [GET]",
  },
  {
    fn: async (defer: any) => {
      await request(`${HTTPS_BASE_URL}${PATH}`, "POST");
      defer.resolve();
    },
    target: "[core-promisified] https [POST]",
  },
];

export default benchmarkModels;
