import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'
  protected schemaName = 'base'

  async up() {
    this.schema.withSchema(this.schemaName).createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('postal_code', 8).notNullable()
      table.string('street_or_Avenue').notNullable()
      table.string('neighborhood').notNullable()
      table.integer('number').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('complement').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  async down() {
    this.schema.withSchema(this.schemaName).dropTable(this.tableName)
  }
}
