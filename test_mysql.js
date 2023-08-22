var mysql = require('mysql');

var con = mysql.createConnection({
  host: "202.21.32.156",
  user: "ispeck",
  password: "Root1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

