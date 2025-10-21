import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'
  protected schemaName = 'base'

  async up() {
    this.schema.withSchema(this.schemaName).createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name', 254).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 100).notNullable()
      table.string('cpf', 14).notNullable()
      table.string('rg', 20).notNullable()
      table.string('code_vehicle', 50).notNullable()
      table.string('type_vehicle', 100).notNullable()
      table.string('phone_number', 20).nullable().unique()
      table.boolean('activity').notNullable()

      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }


  async down() {
    this.schema.withSchema(this.schemaName).dropTable(this.tableName)
  }
}