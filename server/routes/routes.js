const { register, login } = require('../controllers/auth')
const { getProduct, getAll, getProductType, getWishlist, addWishlist, deleteWishlist, postOrder, getOrder } = require('../controllers/controllers')
const { isAuthenticated } = require('../middleware/isAuthenticated')
const path = require('path')

module.exports = app => {
  //auth
  app.post('/api/register', register)
  app.post('/api/login', login)

  //products
  app.get('/api/product-detail/:id', getProduct)  
  app.get('/api/product/:type', getProductType)
  app.get('/api/product', getAll)

  //wishlist - auth needed
  app.get('/api/wishlist', getWishlist)
  app.post('/api/wishlist/:id', isAuthenticated, addWishlist)
  app.delete('/api/wishlist/:id', isAuthenticated, deleteWishlist)

  //orders
  app.post('/api/orders/:id', postOrder)
  app.get('/api/orders/:id', getOrder)

  // deployment
  // app.get('/*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../../build', 'index.html'));
  // })

}