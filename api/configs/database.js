const dotenv = require("dotenv");
dotenv.config();
module.exports = { database: process.env.DB_PROPMART_DATABASE };
