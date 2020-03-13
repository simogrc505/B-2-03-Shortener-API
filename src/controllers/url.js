const { compose, bind, assoc } = require('ramda')
const { encode, decode } = require('bijective')

const repo = require('../models/repo/urls')
const input = require('../input-filters/url')
const error = require('../views/error')
const view = require('../views/url')

const get = (req, res) => {
  return Promise.resolve(decode(req.params.id))
    .then(id => repo.get(id))
    .then(url => res.status(301).redirect(url.url))
    .catch(error.generic(res))
}

const create = (req, res) => {
  repo
    .create(req.body)
    .then(url => Promise.resolve(encode(url.id)).then((result) => assoc('short', result, url)))
    .then(compose(bind(res.status(201).json, res), view.one))
    .catch(error.generic(res))
}

let urls = require('express').Router()

urls.get('/:id',
  get
)

urls.post('/',
  input.validate_create_url_input,
  create
)

module.exports = urls
