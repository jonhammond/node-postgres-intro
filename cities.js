var pg = require('pg');
var connectionString = 'postgres://localhost:5432/pgintro';
var client = new pg.client(connectionString);
client.connect();

client.query("SELECT * FROM cities", function (err, result) {
  console.log(result.rows);
});