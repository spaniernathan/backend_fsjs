const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: '0.0.0.0',
    database: 'chatroomdb',
    password: 'postgres',
    port: 5432,
});

module.exports = pool;