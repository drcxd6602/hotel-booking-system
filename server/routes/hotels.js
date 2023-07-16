import express, { json } from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelRooms,
  updateAllHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create

router.post(
  "/",
  verifyAdmin,
  createHotel
);

//update

router.put("/:id", verifyAdmin, updateHotel);

// update all

router.put("/", verifyAdmin, updateAllHotels);

//delete

router.delete("/find/:id", verifyAdmin, deleteHotel);
//get

router.get("/find/:id", getHotel);

router.get("/countByCities", countByCity);
router.get("/countByTypes", countByType);

//get all

router.get("/", getAllHotels);

//get Rooms

router.get("/rooms/:id", getHotelRooms);

export default router;
