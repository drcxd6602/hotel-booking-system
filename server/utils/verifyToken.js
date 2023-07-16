import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(404, "Not authenticated"));
  }

  jwt.verify(token, process.env.JWT, (error, user) => {
    if (error) return next(createError(401, "Token is not valid"));

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => { 
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not auth!"));
    }
  }); 
};

export const verifyAdmin = (req, res, next) => {
  console.log("veriiing admin")
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      console.log("Admin");
      next();
    } else {
      return next(createError(403, "You are not Admin!"));
    }
  });
};
