import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;

// dotenv.config();

const pool = new Pool({
  user: 'postgres',
  host: 'autorack.proxy.rlwy.net',
  database: 'railway',
  password: 'pTXKOSGKtYAEOpWvkYXutoJjNfBDXuXR',
  port: '10251',
});

export default pool;
