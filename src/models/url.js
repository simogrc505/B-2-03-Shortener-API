const { Model } = require('objection')

const config = require('config')
const knex = require('knex')(config.db)

Model.knex(knex)

class Url extends Model {
  static get tableName () {
    return 'urls'
  }

  static get idColumn () {
    return 'id'
  }
}

module.exports = Url
