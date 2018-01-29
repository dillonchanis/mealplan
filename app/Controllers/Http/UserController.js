'use strict'

class UserController {
  async show () {
    return {
      'message': 'You are authenticated!'
    }
  }
}

module.exports = UserController
