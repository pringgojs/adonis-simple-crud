'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AllHelper extends Schema {

    down(table_name) {
        this.drop(table_name)
    }
}

module.exports = AllHelper
