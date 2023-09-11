const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");

const ctrl = require("../../controllers/auth");

const {
  registerSchema,
  loginSchema,
  verifyEmailSchema,
} = require("../../models/users");

const router = express.Router();

router.post("/register", validateBody(registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validateBody(verifyEmailSchema), ctrl.resendVerifyEmail);

router.post("/login", validateBody(loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logOut);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
