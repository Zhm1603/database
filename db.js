import pkg from 'pg';

const { Pool } = pkg;


const pool = new Pool({
  user: 'postgres',
  host: 'autorack.proxy.rlwy.net',
  database: 'railway',
  password: 'pTXKOSGKtYAEOpWvkYXutoJjNfBDXuXR',
  port: '10251',
});

export default pool;
