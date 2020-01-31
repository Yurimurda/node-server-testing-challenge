
exports.seed = function(knex, Promise) {
  return knex('alpacas')
    .truncate()
    .then(function() {
      return knex('alpacas').insert([
        { name: 'Dollie' },
        { name: 'Dot' },
      ]);
    });
};
