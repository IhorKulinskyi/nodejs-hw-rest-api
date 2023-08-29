const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
} = require("../../models/contacts");

const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(addSchema), ctrl.addContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(updateSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeContact);

module.exports = router;
