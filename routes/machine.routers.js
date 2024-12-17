const Router = require("express");
const machControls = require("../controllers/machine.controller")

const machRouter = new Router()

machRouter.post("/createmach", machControls.createMachine)
machRouter.get("/getmach", machControls.getAllMach)


module.exports = machRouter 