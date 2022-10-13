const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'photorate',
    host: 'localhost',
    database: 'photorate',
    password: 'photorate',
    port: 5432
  });

  module.exports = pool;