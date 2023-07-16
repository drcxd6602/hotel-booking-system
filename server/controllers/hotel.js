import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  console.log(newHotel);
  try {
    console.log(newHotel);
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

// Update all hotels

export const updateAllHotels = async (req, res, next) => {
  try {
    console.log("All updated");
    const updatedHotels = await Hotel.updateMany(
      {},
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedHotels);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedHotel);
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const fetchedHotel = await Hotel.findById(req.params.id);
    res.status(200).json(fetchedHotel);
  } catch (error) {
    next(error);
  }
};

export const getAllHotels = async (req, res, next) => {
  const { min, max, featured, city, limit, ...others } = req.query;
  const query = {};

  if (featured) {
    query.featured = featured;
  }
  if (city) {
    query.city = city;
  }

  if (min && max) {
    query.chepestPrice = { $gte: min, $lte: max };
  } else if (min) {
    query.chepestPrice = { $gte: min };
  } else if (max) {
    query.chepestPrice = { $lte: max };
  }
  const lim = limit ? Number(limit) : 100000;
  console.log(query);
  try {
    const fetchedHotels = await Hotel.find(query).limit(lim);
    res.status(200).json(fetchedHotels);
  } catch (error) {
    next(error);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    res.status(200).json([
      { type: "hotels", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const listOfRooms = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(listOfRooms);
  } catch (error) {
    next(error);
  }
};
