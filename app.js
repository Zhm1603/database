import express, { json } from 'express';
import pool from './db.js';
import userRoutes from './index.js';


const app = express();

app.use(json());
const cors = require("cors");

app.use(cors({
    origin: "*",  
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"], 
    credentials: true,
}));

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
  }
});

app.use(userRoutes); 

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
