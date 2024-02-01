const express = require("express");
const router = express.Router();
const { Car, validateCar } = require("../models/car");

router.get("/", async (req, res) => {
    try {
        res.status(200).send("Get all Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.get("/:id", async (req, res) => {
    try {
        res.status(200).send("Get by ID Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.post("/", async (req, res) => {
    try {
        res.status(201).send("Post Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.put("/:id", async (req, res) => {
    try {
        res.status(200).send("Put Request.");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.status(204).send("");
    } catch (error) {
        res.status(500).send(`Internal Server Error ${error}`);
    }
});

module.exports = router;
