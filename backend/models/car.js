const { Schema, model } = require("mongoose");
const Joi = require("joi");

//* Schema
const carSchema = new Schema({
    // Database level validation
    make: { type: String, required: true, minlength: 2, maxlength: 255 },
    model: { type: String, required: true, minlength: 2, maxlength: 255 },
    year: { type: Number, required: true, min: 1885 },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
});

//* Model
const Car = model("Car", carSchema);

//* Validation
const validateCar = (data) => {
    const schema = Joi.object({
        // Application level validation
        make: Joi.string().min(2).max(255).required(),
        model: Joi.string().min(2).max(255).required(),
        year: Joi.number().min(1885).required(),
        user: Joi.string().hex().length(24).required(),
    });
    return schema.validate(data);
};

module.exports = { Car, validateCar };
