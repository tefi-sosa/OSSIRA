require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')

const {Wishlist} = require('../models/wishlist')
const {Products} = require('../models/products')
const {Order} = require('../models/orders')

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
  }
})

module.exports = {
  getAll: async (req, res) => {
    sequelize.query(
      `SELECT * FROM products`
    )
      .then(dbRes => res.status(200).send(dbRes[0]))
      .catch(err => console.log(err))
  },

  getProductType: async (req, res) => {
    // console.log(req.params.type)
    let shoes = req.params.type

    sequelize.query(
      `SELECT * FROM products WHERE product_type='${shoes}'`
    )
      .then(dbRes => res.status(200).send(dbRes[0]))
      .catch(err => console.log(err))
  },

  getProduct: async (req, res) => {
    console.log(req.params.id)
    let shoeId = req.params.id

    sequelize.query(
      `SELECT * FROM products WHERE product_id='${shoeId}'`
    )
      .then(dbRes => res.status(200).send(dbRes[0]))
      .catch(err => console.log(err))
  },

  getWishlist: async (req, res) => {
    let user_id = req.query.user

    try {
      let results = await Wishlist.findAll({ where: {
        userId: user_id
      } })

      let product_id = results.map((s) => {
        return s.dataValues.productProductId
      })
      // console.log(product_id)

      let favShoes = await Products.findAll({
        where: {
          product_id: product_id
        }
      })
      // console.log(favShoes)
      res.send(favShoes).status(200)
    } catch (error) {
        console.log('ERROR IN GETTING WISHLIST ITEM')
        console.log(error)
        res.sendStatus(400)
    }
  },

  addWishlist: async (req, res) => {
    console.log('ADDING FAV')
    
    let fav = req.params.id
    let userId = req.body.userId

    try {
      await Wishlist.create({ productProductId: +fav, userId: +userId })
      res.sendStatus(200)
    } catch (error) {
        console.log('ERROR IN ADDWISHLIST ITEM')
        console.log(error)
        res.sendStatus(400)
    }
  },

  deleteWishlist: async (req, res) => {
    console.log('DELETING FAV')
    
    let fav = req.params.id
    let userId = req.query.user

    console.log(req.body)

    try {
      await Wishlist.destroy({
        where: {
          productProductId: fav,
          userId: userId
        }
      })
      res.sendStatus(200)
  } catch (error) {
      console.log('ERROR IN DELETEWISHLIST ITEM')
      console.log(error)
      res.sendStatus(400)
  }
  },

  postOrder: async (req, res) => {
    console.log('POSTING ORDER')
    
    let order = JSON.stringify(req.body.cart)
    let userId = Number(req.params.id)

    console.log(order)
    console.log(userId)

    try {
      await Order.create({ order_info: order, userId: userId })
      res.sendStatus(200)
    } catch (error) {
        console.log('ERROR IN POSTING ORDER')
        console.log(error)
        res.sendStatus(400)
    }
  },

  getOrder: async (req, res) => {
    console.log('GETTING ORDER')
    
    let userId = Number(req.params.id)
    // console.log(userId)

    sequelize.query(
      `SELECT "order_info" FROM "orders" WHERE "userId" = ${userId}`
    )
      .then(dbRes => res.status(200).send(dbRes[0]))
      .catch(err => console.log(err))

    // try {

    //   let results = await Order.findAll({ where: {
    //     userId: userId
    //   } })

    //   // console.log(results)
    //   // results = JSON.parse(results)

    //   res.send(results).status(200)
    // } catch (error) {
    //     console.log('ERROR IN POSTING ORDER')
    //     console.log(error)
    //     res.sendStatus(400)
    // }
  },
}