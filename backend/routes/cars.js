const express = require("express");
const router = express.Router();
const { Car, validateCar } = require("../models/car");
const { auth } = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
    try {
        let user = req.user._id;
        let cars = await Car.find({ owner: user });
        if (cars.length > 0) {
            return res.status(200).send(cars);
        } else {
            return res.status(404).send("No cars found.");
        }
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.get("/:id", auth, async (req, res) => {
    try {
        let carId = req.params.id;
        let user = req.user._id;
        // Ensure car belongs to currently logged in user.
        let car = await Car.findOne({ owner: user, _id: carId });
        if (car) {
            return res.status(200).send(car);
        } else {
            return res
                .status(404)
                .send(
                    `No car for ${req.user.username} found with an ID of ${carId}.`
                );
        }
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.post("/", auth, async (req, res) => {
    try {
        let data = req.body;
        // Set the 'owner' field to the currently logged-in user's ID.
        data.owner = req.user._id;
        let { error } = validateCar(data);
        if (error) {
            return res.status(400).send("Invalid body for post request.");
        }
        let newCar = new Car(data);
        await newCar.save();
        res.status(201).send(newCar);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
        let data = req.body;
        // Set the 'owner' field to the currently logged-in user's ID.
        data.owner = req.user._id;
        let { error } = validateCar(data);
        if (error) {
            return res.status(400).send("Invalid body for put request.");
        }
        // Ensure car belongs to currently logged in user before updating.
        let updatedCar = await Car.findOneAndUpdate(
            { _id: req.params.id, owner: req.user._id },
            data,
            { new: true }
        );
        if (!updatedCar) {
            return res
                .status(404)
                .send("Car not found or user is not the owner.");
        }
        res.status(200).send(updatedCar);
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        // Ensure car belongs to currently logged in user before deleting.
        let deletedCar = await Car.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id,
        });
        if (!deletedCar) {
            return res
                .status(404)
                .send("Car not found or user is not the owner.");
        }
        res.status(204).send("");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

module.exports = router;
