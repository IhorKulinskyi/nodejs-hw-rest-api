const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const userSchema = new Schema({
  password: {
    type: String,
    minLength: 6,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: {
    type: String,
    default: "",
  },
  avatarUrl: {
    type: String,
    required: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    default: "",
  },
});

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
});

const User = model("user", userSchema);

module.exports = { User, registerSchema, loginSchema, verifyEmailSchema };
