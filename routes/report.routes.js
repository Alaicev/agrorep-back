const Router = require("express");
const ReportController = require("../controllers/report.controls")

const ReportRouter = new Router()

ReportRouter.post("/report", ReportController.createReport)

module.exports = ReportRouter