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
  getProduct: async (req, res) => {
    // console.log(req.params.type)
    let shoe = req.params.type

    sequelize.query(
      `SELECT * FROM products WHERE product_type='${shoe}'`
    )
      .then(dbRes => res.status(200).send(dbRes[0]))
      .catch(err => console.log(err))
  }
}