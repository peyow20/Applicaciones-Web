var mysql = require('mysql');
// Consulta SQL.



// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : 'parcial2_a00825988',
  port: "3307"
});



//Funcion que nos permite comprobar la conexión a la base de datos.
con.connect(function(err) {
if (err) throw err;
 console.log("Connected!");
 /*var sql = "INSERT INTO alumnos (Nombre, Identificador, Email, Carrera) VALUES ('Alfredo', '00825988','A00825988@tec.mx','ITC')";
 con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Insert hecho");
 });
 */

/*
   var sql = "UPDATE alumnos SET Nombre = 'Borrar alumno' WHERE Id = '2'";
   con.query(sql, function (err, result) {
   if (err) throw err;
   console.log(result.affectedRows + "Actualizacion hecha");
 });
 */

 /*
 var sql = "DELETE FROM alumnos WHERE Id = '2'";
 con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Numero de registros borrados: " + result.affectedRows);
});
*/
 con.query("SELECT * FROM alumnos", function (err, result) {
  if (err) throw err;
  console.log(result);
})
});



