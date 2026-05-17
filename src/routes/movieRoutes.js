import express from "express";
import { validateRequest } from "../middleware/validateRequest.js";
import { createMovieSchema, updateMovieSchema } from "../validators/movieValidator.js";


const router = express.Router()

router.get("/",(req,res) => {
    res.json({httpMethod: "get"});
});

//add new
router.post("/", validateRequest(createMovieSchema), (req,res) => {
    res.json({httpMethod: "post"});
});

//update
router.put("/", validateRequest(updateMovieSchema), (req,res) => {
    res.json({httpMethod: "put"});
});

router.delete("/",(req,res) => {
    res.json({httpMethod: "delete"});
});

export default router
