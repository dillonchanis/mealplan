'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const VERSION = 'api/v1'

Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
  Route.get('/secret', 'UserController.show')
})
.prefix(VERSION)
.middleware(['auth:jwt'])
