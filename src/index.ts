import express from "express";
import dotenv from 'dotenv';

const app=express();
dotenv.config();
const port = process.env.PORT;

if(!port){
    process.exit();
}
// const obj={name:"apakshhith"};



app.listen(port,()=>{
    console.log(`running on http://localhost:${port}`);
    
})