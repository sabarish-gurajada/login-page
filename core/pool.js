const util = require('util');
const mysql = require('mysql');
// Connection to the database.
//  *  */
 const pool = mysql.createPool({
   connectionLimit: 10,
   //host: '35.226.43.114',
   user: 'devops', // use your mysql username.
   password: 'Sab@13081989', // user your mysql password.
   database: 'devops',
   socketPath: '/cloudsql/tcsdevopsathon:us-central1:devops'
  
 });
 
 pool.getConnection((err, connection) => {
     if(err) 
         console.error(err);
   
     if(connection)
         connection.release();
     return;
 });

 pool.query = util.promisify(pool.query);

 module.exports = pool;