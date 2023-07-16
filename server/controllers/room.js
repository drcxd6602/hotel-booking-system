import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

// Create Room
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: {
          rooms: savedRoom._id,
        },
      });
    } catch (error) {
      next(error);
      }
      res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

// Update Room
export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
};

// Delete Room

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    console.log("Delete room")
  try {
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: {
          rooms: req.params.id,
        },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(deletedRoom);
  } catch (error) {
    next(error);
  }
};


// Get Room

export const getRoom = async (req, res, next) => {
  try {
    const fetchedRoom = await Room.findById(req.params.id);

    res.status(200).json(fetchedRoom);
  } catch (error) {
    next(error);
  }
};

// Get all Rooms
export const getAllRooms = async (req, res, next) => {
  try {
    const fetchedRooms = await Room.find();

    res.status(200).json(fetchedRooms);
  } catch (error) {
    next(error);
  }
};
