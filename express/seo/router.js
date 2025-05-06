const express = require("express");
const seoController = require("./controller");

const seoRouter = express.Router();

seoRouter.get("/", (req, res) => {
  res.send(seoController.indexHtml());
});
seoRouter.get("/robots.txt", (req, res) => {
  res.send(`User-agent: * \r\n Disallow: /hive/`);
});
seoRouter.get("/sitemap.xml", async (req, res) => {
  const host = req.get("host");
  res.set("Content-Type", "text/xml");
  res.send(seoController.sitemapXml(host));
});

module.exports = seoRouter;