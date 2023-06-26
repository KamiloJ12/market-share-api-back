const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "market_share_db",
  host: "dpg-cid2315ph6esg7fjna80-a.oregon-postgres.render.com",
  port: 5432,
  username: "market_user",
  password: "BV3sNFT6Jqsdpv6ahnykDELlWPrWWP9Z",
  dialect: "postgres"
});

module.exports = db;