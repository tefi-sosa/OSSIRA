const { register, login } = require('../controllers/auth')
const { getProduct, getAll } = require('../controllers/controllers')
const { isAuthenticated } = require('../middleware/isAuthenticated')

module.exports = app => {
  //auth
  app.post('/register', register)
  app.post('/login', login)

  //products
  app.get('/product/:type', getProduct)
  app.get('/product', getAll)
}