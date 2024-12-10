const db = require("../db");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class Users {
  async createUser (req, res) {
    const {name, email, password, phone} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
      const newUser = await db.query("INSERT INTO users (name, email, password, phone, role) values ($1, $2, $3, $4, $5) RETURNING *", [name, email, hashedPassword, phone, "user"])
      
      const {password, role, ...data} = newUser.rows[0]
      console.log(data)
      res.status(200).json(data)
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  }
  async loginUser (req, res) {
    const {email, password} = req.body
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1", [email])
      if (result.rows.length === 0) {
        return res.status(400).json({ error: 'User not found' });
      }
      const user = result.rows[0] 
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
      const token = jwt.sign(
        { id: user.id, name: user.name, email: user.email,},
        'your_jwt_secret',
        { expiresIn: '1h' }  
      );
      res.json({ token });
    }
    catch (err) { 
      res.status(500).json({ error: err.message });
    }
  }
  async getLogin (req, res) {
    const {email, password} = req.body
    const token = jwt.sign({email, password}, "sfdsezw1123")
    try{
      res.json({
        success: true,
        token: token
      })
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new Users()