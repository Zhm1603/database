import pool from './db.js';


export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM users WHERE userid = $1', [id]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// export const updateUserInfo = async (req, res) => {
//   const { id } = req.params;
//   const { level, balans, gender } = req.body;

//   try {
//     const existingUser = await pool.query('SELECT * FROM users WHERE userid = $1', [id]);
//     if (existingUser.rows.length === 0){
//       return res.status(404).json({error: 'User not found'});
//     }
  

//     const updateUserInfo = {
//       level: level || existingUser.rows[0].level,
//       balans: balans || existingUser.rows[0].balans,
//       gender: gender || existingUser.rows[0].gender
//     };

//     await pool.query('UPDATE users SET level = $1, balans = $2, gender = $3 WHERE userid = $4',[updateUserInfo.level,updateUserInfo.balans,updateUserInfo.gender,id]);

//     res.json({message:'User updated', user: updateUserInfo});
//   } catch (err) {
//   console.error(err);
//   res.status(500).send('Server error');
//   }
// };
