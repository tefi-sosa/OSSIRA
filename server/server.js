const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const { sequelize } = require('./database/database')

const { User } = require('./models/user')
const { Wishlist } = require('./models/wishlist')
const { Products }= require('./models/products')
const { Order } = require('./models/orders')


const app = express()

// Middleware //
app.use(express.json())
app.use(cors())

// app.use(express.static(path.resolve(__dirname, '../build')))

// Database //

Wishlist.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
Products.hasMany(Wishlist)
Products.hasMany(Order)
User.hasMany(Order)

// Routes //
require('./routes/routes')(app)

const PORT = process.env.PORT || 4000

sequelize
	.sync( 
		// {force: true}
		)
	.then(() => {
		app.listen(PORT, () =>
			console.log(`DB synced and server running on port ${PORT}`)
		)
	})
	.catch(err => console.error(err))
