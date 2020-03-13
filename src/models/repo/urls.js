const { assoc, omit, compose } = require('ramda')
const { if_exists, if_already_exists } = require('../../utilities/errors_code')
const Url = require('../url')

module.exports = {
  get: (id) => {
    console.log(id)
    const query = Url.query()

    query
      .where({ id })
      .first()

    return query.then(if_exists)
  },
  create: (body) => {
    return Url.query().insert(body)
      .then((url) => Url.query().where({ id: url.id }).first())
  },
}
