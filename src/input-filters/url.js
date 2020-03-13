const Joi = require('@hapi/joi')
const validator = require('express-joi-validation').createValidator({
  passError: true,
})

exports.validate_create_url_input = validator.body(Joi.object({
  url: Joi.string(),
}))
