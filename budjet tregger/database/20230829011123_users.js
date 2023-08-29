

  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  exports.up = function(knex) {
    return knex.schema.createTable('users', (table)=>{
      table.increments('user_id').primary();
      table.string('full_name',32).notNullable;
      table.string('email',60).notNullable;
      table.string('password',255).notNullable;
      table.integer('user_wallet').notNullable;
      table.timestamp('created_at');
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    
  };

  