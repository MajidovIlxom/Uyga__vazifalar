

  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  exports.up = function(knex) {
    return knex.schema
    .createTable('rasxod', (table)=>{
      table.increments('rasxod_id').primary();
      table.string('rasxod_category_name',32).notNullable;
      table.integer('raxod_wallet').notNullable;
      table.integer('rasxod_user_id').references("user_id").inTable("users");
      table.timestamp('created_at');
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    
  };

  


