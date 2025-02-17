import express,{Router} from "express";
import * as sharp from '../controllers/sharp'

const router=Router();

router.post('/resize',sharp.resizeImage);


export default router;