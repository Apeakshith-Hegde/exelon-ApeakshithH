import express from 'express';
import dotenv from 'dotenv';
import greeting from './routes/routes'

const app=express();
dotenv.config();
app.use(express.json()); 
const port =process.env.port;


app.use('/v1',greeting);


app.listen(port,()=>{
    console.log(`running on http://localhost:${port}`);
    
})