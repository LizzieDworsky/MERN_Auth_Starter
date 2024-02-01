const express = require("express");
const router = express.Router();
const { Car, validateCar } = require("../models/car");
const { auth } = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
    try {
        res.status(200).send("Get all Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.get("/:id", auth, async (req, res) => {
    try {
        res.status(200).send("Get by ID Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.post("/", auth, async (req, res) => {
    try {
        let data = req.body;
        data.user = req.user._id;
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
        res.status(200).send("Put Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        res.status(204).send("");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

module.exports = router;
