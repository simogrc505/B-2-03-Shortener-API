
exports.up = function (knex, Promise) {
  return knex.schema.createTable('urls', function (t) {
    t.charset('utf8')
    t.collate('utf8_general_ci')
    t.increments('id').unsigned().primary()
    t.string('url')
  })
}

exports.down = function (knex, Promise) {
}
