import express from "express";
import {addToWatchlist, removeFromWatchlist, updateWatchlistItem} from '../controllers/watchlistController.js'
import { authMiddleware } from "../middleware/authMiddleware.js";


const router = express.Router();

router.use(authMiddleware);

router.post("/", addToWatchlist);


// http://localhost:5001/watchlist/:id
router.put("/:id", updateWatchlistItem)


// http://localhost:5001/watchlist/:id
router.delete("/:id", removeFromWatchlist)


export default router
