const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    ,
  phone: Joi.string(),
});

module.exports = { addSchema };
