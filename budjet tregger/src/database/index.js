const knexFile =require('../../knexfile')
const knexdb = require('knex');

const knex = knexdb(knexFile['development'])

module.exports =knex