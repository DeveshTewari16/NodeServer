const express=require('express');
var cors = require('cors');
const app=express();
const mysql=require('mysql2');
const bodyparser=require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));

const db=mysql.createConnection({
host:"localhost",
user:"root",
password:"12345",
database:"CrudDatabase"
});

app.post('/api/newuser',(req,res)=>{

    userId=req.body.userId;
    fullName=req.body.fullName;
    email=req.body.email;
    phone=req.body.phone;
    address=req.body.address;
    

    sqlInsert="Insert into user_details values (?,?,?,?,?)";
    db.query(sqlInsert,[userId,fullName,email,phone,address],(err,result)=>{
        if (err) console.log(err);
        res.send('Data Inserted Successfully');
    });
    console.log('Inserted');
    
});

app.get('/test',(req,res)=>{
    res.send('API Working')
    
})
app.listen(3003,()=>{
    console.log('Running on port 3003');
    
})