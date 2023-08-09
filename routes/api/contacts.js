const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const { addSchema, updateSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(addSchema), ctrl.addContact);

router.put("/:contactId", validateBody(updateSchema), ctrl.updateContact);

router.delete("/:contactId", ctrl.removeContact);

module.exports = router;
