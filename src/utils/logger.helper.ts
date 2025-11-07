import pino from "pino";
import pinoHttp from "pino-http";

const transport = pino.transport({
  targets: [
    {
      target: "pino/file",
      level: "info",
      options: {
        destination: `./src/logs/all-logs.log`,
        mkdir: true,
      },
    },
    {
      target: "pino/file",
      level: "error",
      options: {
        destination: `./src/logs/error.log`,
        mkdir: true,
      },
    },
    {
      target: "pino-pretty",
      level: "info",
      options: {
        colorize: true,
      },
    },
  ],
});

export const logger = pino(transport);

export const pinoHttpMiddleware = pinoHttp.default({
  // .default ts不允许直接使用导入的函数，会报错”没有调用签名。“
  // 解决方法：使用 .default 方法调用
  logger,
  // 自定义 req 序列化器,注意:请求体中包含敏感信息，按需使用,这里默认不用
  // serializers: {
  //   req(req) {
  //     req.body = req.raw.body;
  //     return req;
  //   },
  // },
});
