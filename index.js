const express = require("express");
const cors = require("cors");
const users = require('./routes/users.routes');
const report = require('./routes/report.routes.js')
const machine = require('./routes/machine.routers.js')

const app = express();
const PORT = process.env.ROPT || 5070;
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use('/api', users);
app.use('/api', report);
app.use('/api', machine);


app.listen(PORT, "localhost", () => {
  console.log("server stardter");
}); 
