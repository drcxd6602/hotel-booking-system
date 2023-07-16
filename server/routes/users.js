import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/check", verifyToken, (req, res, next) => {
//   res.send("Hello user, you sre logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you can delete your account");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Welcome admin");
// });

//update user
router.put("/:id",verifyUser, updateUser);

// delete user
router.delete("./id",verifyUser, deleteUser);

// get user

router.get("/:id", verifyUser, getUser);
// get all users

router.get("/", verifyAdmin, getAllUsers);
export default router;
