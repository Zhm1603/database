import express, { json } from 'express';
import pool from './db.js';
import userRoutes from './index.js';


const app = express();

app.use(json());

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
  }
});

app.use('/api', userRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
