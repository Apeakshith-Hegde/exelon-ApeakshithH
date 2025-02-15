import {Request,Response,NextFunction} from "express";


export async function greetingAliens(req:Request,res:Response,next:NextFunction){
    const {name}=req.body;
    console.log("Hello alien "+name+" welcome to earth");
    res.send(`Hello alien ${name} welcome to Earth`);
    
}