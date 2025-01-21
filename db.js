import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'autorack.proxy.rlwy.net',
  database: 'railway',
  password: 'XiLeIpcHsRxJJGvtSLqAMYwKupfRerFL',
  port: '35726',
});

export default pool;
