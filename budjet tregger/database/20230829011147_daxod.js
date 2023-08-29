/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('daxod', (table)=>{
      table.increments('daxod_id').primary();
      table.string('daxod_category_name',32).notNullable;
      table.integer('daxod_wallet').notNullable;
      table.integer('daxod_user_id').references("user_id").inTable("users");
      table.timestamp('created_at');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
