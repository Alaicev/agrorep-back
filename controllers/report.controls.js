const db = require("../db");

class Report {
  async createReport (req, res) {
    const {name, email, message, codemach} = req.body
    console.log(req.body)
    try {
      const newReport = db.query("INSERT INTO report (name, email, message, codemach) values ($1, $2, $3, $4) RETURNING *", [name, email, message, codemach])
      res.status(200).json("Записть добавлена")
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  }
}

module.exports = new Report()