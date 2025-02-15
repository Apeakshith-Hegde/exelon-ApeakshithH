import { Router } from "express";
import express from 'express';
import * as greeting from '../controllers/greetingControllers'

const router=express.Router();

router.post('/hello',greeting.greetingAliens);

export default router;