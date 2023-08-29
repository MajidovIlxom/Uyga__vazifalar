
  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  exports.up = function(knex) {
    return knex.schema
    .createTable("category", (table) => {
      table.increments("category_id").primary();
      table.string("category_name",32).notNullable();
      table.integer("rasxod_category_id").references("rasxod_id").inTable("rasxod");
      table.integer("daxot_category_id").references("daxod_id").inTable("daxod");
      table.timestamp('created_at');
  
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    
  };
  