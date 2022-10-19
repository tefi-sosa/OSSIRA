require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')

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
}