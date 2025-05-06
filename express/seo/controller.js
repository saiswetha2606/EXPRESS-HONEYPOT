const pages = require("../pages");
const config = require("../config");
const beeLanguage = require("../honey/display/beeLanguage");

function sitemapXml(host) {
  const urls = [];
  const dateMod = new Date();
  pages.map((page) => {
    const urlToAdd = `${host}${page.url}`;
    return urls.push(
      `<url>
        <loc><![CDATA[${urlToAdd}]]></loc>
        <lastmod>${dateMod.toISOString().split("T")[0]}</lastmod>
      </url>`
    );
  });
  const structure = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("\n")}
      </urlset>
      `;
  return structure;
}
function indexHtml() {
  const urls = ['<li><a href="sitemap.xml">sitemap</a></li>'];
  pages.map((page) =>
    urls.push(`<li><a href="${page.url}">${page.metas.title}</a></li>`)
  );
  const structure = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
        <head>
          <title>Beeeeee 🐝</title>
          <meta name="google-site-verification" content="${
            config.googleVerification
          }" />
        </head>
        <body>
        <h1>Bzzzzzzzz!</h1>
        <p>Welcome to bee learning, the best place to learn the bee language.</p>
        <p><a href="./beekeeper">Beekeper Access</a></p>
        <img src="./beekeeper.jpg" alt="beekeeper" />
        <p>
        ${beeLanguage.generateBeeText()}
        </p>
        <ul>
          ${urls.join("\n")}
        </ul>
      </body>
    </html>`;
  return structure;
}

const seoController = {
  sitemapXml,
  indexHtml,
};
module.exports = seoController;