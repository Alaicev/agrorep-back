const Pool = require("pg").Pool


//Поправить потом 

const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5432,
  database: "agrorep"
});


module.exports = pool