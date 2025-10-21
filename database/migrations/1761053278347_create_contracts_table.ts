import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contracts'
  protected schemaName = 'base'

  async up() {
    this.schema.withSchema(this.schemaName).createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('value_of_contract').notNullable()
      table.integer('time_of_contract').notNullable()
      table.string('cpf_contractor').notNullable()
      table.string('rg_contractor').nullable()
      table.string('phone_number').nullable()
      table.string('pdf').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
      table.timestamp('deleted_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}