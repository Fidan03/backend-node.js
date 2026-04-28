import express from "express";
import {addToWatchlist} from '../controllers/watchlistController.js'


const router = express.Router();

router.post("/register", addToWatchlist);



export default router