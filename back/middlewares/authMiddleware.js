import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";
import jwt from 'jsonwebtoken'

const authenticate = asyncHandler(async (req, res, next) => {
    let token;
    // Read jwt from the 'jwt' cookie
    token = req.cookies.jwt;
    console.log(req.cookies)
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select("-password");
            console.log({
                decoded,
                user: req.user
            })
            next();

        } catch (error) {
            res.status(401)
            throw new Error("Not authorized, token failed " + error)
        }
    } else {
        res.status(401)
        throw new Error("Not authorized, no token")
    }
})


const authorizeAdmin = (req, res, next) => {
    console.log(req.user)
    if(req.user && req.user.isAdmin){
        console.log("check is admin")
        next()
    }else{
        res.status(401).send
        ("Not authorized as an admin")
    }
}

export {
    authenticate,authorizeAdmin
}