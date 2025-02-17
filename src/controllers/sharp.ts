import sharp from "sharp";
import express,{Request,Response,NextFunction} from "express";
// import p from '../image/forOutput'
import path from 'path';
import { IProject } from '../utils/v1/customTypes'
import { ErrorCodes } from "../../../db/models";


const app=express();
app.use(express.json()); 


export async function resizeImage(req:Request,res:Response,next:NextFunction) {
  try {
    const {inputPath, outputPath}=req.body;
    console.log(inputPath);


    
    const result=await sharp(inputPath)
      .resize(300, 200) 
      .toFile(outputPath);
      
        if (result) {
          req.apiStatus = {
            isSuccess: false,
            data: "Failed to create patient details",
            toastMessage: "Failed to create patient details",
            error: ErrorCodes[1006],
          };
          next();
          return;
        }
        else {
            req.apiStatus = {
              isSuccess: true,
              data: "patient details Added Successfully",
              toastMessage: "patient details Added Successfully",
            };
            next();
            return;
          }
    
          
      } 
   catch (error) {
    console.error("Error processing image:", error);
  }

}