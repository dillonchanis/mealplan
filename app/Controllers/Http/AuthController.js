'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class AuthController {
  async login ({ auth, request, response }) {
    const { email, password } = request.all()

    const validation = await validate({ email, password}, {
      email: 'required|email',
      password: 'required'
    })

    if (validation.fails()) {
      return response.status(400).send(validation.messages())
    }

    return await auth.attempt(email, password)
  }

  async register ({ auth, request, response }) {
    const { email, password } = request.all()

    const validation = await validate({ email, password }, {
      email: 'required|email|unique:users',
      password: 'required'
    })

    if (validation.fails()) {
      return response.status(400).send(validation.messages())
    }

    return await User.create({ email, password })
  }

  async logout ({ auth }) {
    return await auth.logout()
  }
}

module.exports = AuthController
