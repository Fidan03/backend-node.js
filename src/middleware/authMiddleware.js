import jwt from 'jsonwebtoken'
import {prisma} from '../config/db.js'


// Read the token from the request
// check if token valid
export const authMiddleware = async (req, res, next) => {
    console.log('done');
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    } else if(req.cookies?.jwt) {
        token = req.cookies.jwt
    }


    if(!token) {
        return res.status(401).json({error: "Not authorized, no token provided"});
    }


    try{
        //verify token and extrct the user ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await prisma.user.findUnique({
            where: {id: decoded.id},
        });

        if(!user){
            return res.status(401).json({error: "User no longer exists"});
        }

        req.user = user;
        next();
    } catch(err){
        return res.status(401).json({error: "Not authorized, token failed"});
    }
}



    // "userId": "56f632cc-3201-435a-8084-7e7ef716d68a",