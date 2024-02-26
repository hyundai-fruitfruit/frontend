/**
 * @author 엄상은
 * @email sangeun.e.9@gmail.com
 * @create date 2024-02-26 19:41:08
 * @modify date 2024-02-26 19:41:08
 * @desc 프록시 세팅
 */

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // process.env.REACT_APP_BACK_SERVER_URL
  const target = "http://localhost:8080";

  app.use(
    "/api/v1",
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};