const {  pick  } = require('ramda')

const fields = ['id', 'url', 'short']

module.exports = {
  one: pick(fields),
}
