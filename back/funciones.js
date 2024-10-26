const { Pool } = require('pg')
const pool = new Pool({
host: 'localhost',
user: 'postgres',
password: '3434',
database: 'likeme',
allowExitOnIdle: true
})

//Crear una ruta GET con Express para devolver los registros de una tabla alojada en PostgreSQL.
// función para leer los posts
const leerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts;");
    console.log("Registros de la BD:", rows);
    return rows;
  };

  // función para escribir los posts
const escribirPosts = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT,$1,$2,$3,0)";
    const values = [titulo, url, descripcion];
    await pool.query(consulta, values);
  };
  
  module.exports = { leerPosts, escribirPosts };