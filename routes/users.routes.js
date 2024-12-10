const Router = require("express");
const userControls = require("../controllers/users.controller")
const userMidle = require("../midle/Midle")

const UserRouter = new Router()

UserRouter.post("/regist", userControls.createUser)
UserRouter.post("/login", userControls.loginUser)
UserRouter.get("/me", userMidle, (req, res) => {
  res.json(res.user)
})

module.exports = UserRouter 