import express from 'express';
import dotenv from 'dotenv';
import image from './routes/sharpRoutes'

dotenv.config();
const app=express();
app.use(express.json()); 
const port=process.env.PORT;

function ensurePortIsDefined() {
    if (!port) {
      console.error('Error: PORT environment variable is undefined');
      process.exit(1); // Terminates the app
    }
  }
  
  ensurePortIsDefined(); // Check if PORT is defined
app.use('/v1/image',image);
app.listen(port,()=>{
    console.log(`running on http://localhost:${port}`);
    
})