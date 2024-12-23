const db = require("../db");

class Report {
  async createReport (req, res) {
    const {hourse, message, machcode} = req.body
    console.log(req.body)
    try {
      const newReport = db.query("INSERT INTO report (hourse, message, machcode) values ($1, $2, $3) RETURNING *", [hourse, message, machcode])
      res.status(200).json("Записть добавлена")
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  }
  async getAllReoId (req, res) {
    const id  = req.params.id
    try {
      const allRep = await db.query("SELECT * FROM report where machcode = $1", [id])
    res.status(200).json(allRep.rows)
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  }
}

module.exports = new Report()