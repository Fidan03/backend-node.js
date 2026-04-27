import express from "express";


const router = express.Router()

router.get("/",(req,res) => {
    res.json({httpMethod: "get"});
});

//add new
router.post("/",(req,res) => {
    res.json({httpMethod: "post"});
});

//update
router.put("/",(req,res) => {
    res.json({httpMethod: "put"});
});

router.delete("/",(req,res) => {
    res.json({httpMethod: "delete"});
});

export default router



// postgres://5344aaa9affa21b0b76ea6d209dd4ce904193a544edd08dc408db1e29be8de22:sk_fZLyWOUfdBVSdw7nWtp2U@db.prisma.io:5432/postgres?sslmode=require