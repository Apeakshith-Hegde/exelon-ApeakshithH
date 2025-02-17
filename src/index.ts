import express from 'express';
import dotenv from 'dotenv';
import image from './routes/sharpRoutes'

dotenv.config();
const app=express();
app.use(express.json()); 
const port=process.env.PORT;
app.use('/v1/image',image);
app.listen(port,()=>{
    console.log(`running on http://localhost:${port}`);
    
})