require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')
// const wishlist = require('../models/wishlist')

const {Wishlist} = require('../models/wishlist')

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
  addWishlist: async (req, res) => {
    console.log('ADDING FAV')
    
    let fav = req.params.id
    let userId = req.body.userId

    try {
      // const {productProductId, userId} = req.body
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
    let userId = req.body.userId

    try {
      // const {productProductId, userId} = req.body
      await Wishlist.create({ productProductId: +fav, userId: +userId })
      res.sendStatus(200)
  } catch (error) {
      console.log('ERROR IN DELETEWISHLIST ITEM')
      console.log(error)
      res.sendStatus(400)
  }
  },
}