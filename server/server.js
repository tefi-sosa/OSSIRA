const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { sequelize } = require('./database/database')

const app = express()

// Middleware //
app.use(express.json())
app.use(cors())

// Database //


// Routes //
require('./routes/routes')(app)

const port = process.env.PORT || 4000

sequelize
	.sync()
	.then(() => {
		app.listen(port, () =>
			console.log(`DB synced and server running on port ${port}`)
		)
	})
	.catch(err => console.error(err))
