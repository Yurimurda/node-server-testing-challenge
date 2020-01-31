const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(post) {
    return db('alpacas')
      .insert(post)
      .then(ids => {
        return findById(ids[0]);
      });
  }

async function update(id, changes) {
  return null;
}

function remove(id) {
    return db('alpacas')
      .where('id', id)
      .del();
  }

function getAll() {
  return db('alpacas');
}

function findById(id) {
  return db('alpacas')
    .where({ id })
    .first();
}