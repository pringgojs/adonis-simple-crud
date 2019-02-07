'use strict'

const User = use('App/Models/User')

class WelcomeController {

    async index() {
        let users = await User.all()
        return users.toJSON()
    }
}

module.exports = WelcomeController
