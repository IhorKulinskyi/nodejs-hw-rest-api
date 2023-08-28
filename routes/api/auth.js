const express = require("express");

const { validateBody } = require("../../middlewares");

const ctrl = require("../../controllers/auth");

const { registerSchema, loginSchema } = require("../../models/users");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

router.post("/login", validateBody(loginSchema), ctrl.login);

module.exports = router;
