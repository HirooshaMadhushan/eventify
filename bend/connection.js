const mysql=require('mysql');
const dotenv=require('dotenv');

dotenv.config();

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'hirusha_db'
});

connection.connect((err)=>{
    if(err){
        console.log("Error connecting to database: "+err.message);
        return;
    }
    console.log("Connected to database");
});

module.exports=connection;