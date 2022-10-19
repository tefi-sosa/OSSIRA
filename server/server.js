const express = require('express')
const cors = require('cors')
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

// Database //

Wishlist.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
Products.hasMany(Wishlist)
Products.hasMany(Order)
User.hasMany(Order)

// Routes //
require('./routes/routes')(app)

const port = process.env.PORT || 4000

sequelize
	.sync( 
		// {force: true}
		)
	.then(() => {
		app.listen(port, () =>
			console.log(`DB synced and server running on port ${port}`)
		)
	})
	.catch(err => console.error(err))
