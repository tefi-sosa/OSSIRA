const { register, login } = require('../controllers/auth')
const { getProduct, getAll, getProductType } = require('../controllers/controllers')
const { isAuthenticated } = require('../middleware/isAuthenticated')

module.exports = app => {
  //auth
  app.post('/register', register)
  app.post('/login', login)

  //products
  app.get('/product-detail/:id', getProduct)  
  app.get('/product/:type', getProductType)
  app.get('/product', getAll)


}