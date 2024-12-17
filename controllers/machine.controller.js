const db = require("../db");

class Machine {
  async createMachine (req, res) {
    const {name} = req.body
    try {
      const newUser = await db.query("INSERT INTO machine (name) values ($1) RETURNING *", [name])
      
      res.status(200).json(newUser)
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  }
  async getAllMach (req, res) {
    try {
      const allMach = await db.query("SELECT * FROM machine")
      res.status(200).json(allMach)
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  }
}

module.exports = new Machine()