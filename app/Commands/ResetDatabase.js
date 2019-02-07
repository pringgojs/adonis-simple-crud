'use strict'

const { Command } = require('@adonisjs/ace')
const Database = use('Database')

class ResetDatabase extends Command {
  static get signature () {
    return 'reset:database'
  }

  static get description () {
    return 'Comand for reset database'
  }

  async handle (args, options) {
    const show_tables = await Database.raw('show tables')
    var data = JSON.parse(JSON.stringify(show_tables[0]))
    
    await Database.raw('SET FOREIGN_KEY_CHECKS = 0')

    for (let index = 0; index < data.length; index++) {
      const table_name = data[index].Tables_in_db_adonisjs
      await Database.raw('DROP TABLE IF EXISTS '+table_name)
    }

    await Database.raw('SET FOREIGN_KEY_CHECKS = 1')
    console.log('done')
  }
}

module.exports = ResetDatabase
