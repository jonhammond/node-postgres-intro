var pg = require('pg');
var connectionString = 'postgres://localhost:5432/pgintro';
var client = new pg.Client(connectionString);
client.connect();

client.query("SELECT * FROM cities", function (err, result) {
  console.log(result.rows);
});

// client.query("INSERT INTO cities (name, country, rating) VALUES ('Chicago', 'USA', 10);", function(err, result) {
//     console.log(result.rows);
//   });

client.query("SELECT * FROM cities WHERE ID=1", function (err, result){
  console.log(result.rows);
});