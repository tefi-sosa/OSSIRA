require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {SECRET} = process.env
const {User} = require('../models/user')


const createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id
    },
    SECRET,
    { 
      expiresIn: '1h' 
    }
  )
}

module.exports = {
  register: async (req, res) => {
    console.log("register")
    console.log(req.body)

    try {
      const {username, password} = req.body

      if (username === '' || password === '') {
				throw 'Please provide a username and password'
			}

      const requirements = new RegExp(
				'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$'
			) // Validating username length, same as data model user

      if (!requirements.test(password)) {
				throw 'Password must be at least 5 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.'
			}

      const foundUser =  await User.findOne({where: {username}})
      
      if (foundUser) {
        throw 'User already exists'
      } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await User.create({username, hashed_pass: hash})

        console.log("NEW USER")

        const token = createToken(newUser.dataValues.username, newUser.dataValues.id)

        console.log('TOOOOOOKEN', token)

        const exp = Date.now() + 1000 * 60 * 60 
        res.status(200).send({
            username: newUser.dataValues.username,
            userId: newUser.dataValues.id,
            token,
            exp})
      }
    } catch (error) {
      console.error('ERROR in register', error)
			res.status(400).send(error)
    }
  },

  login: async (req, res) => {
    try {
      const {username, password} = req.body
      const foundUser =  await User.findOne({where: {username}})
      console.log("found user")

      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(password, foundUser.hashed_pass)
        if (isAuthenticated) {
          console.log("LOGED IN")

          const token = createToken(foundUser.dataValues.username, foundUser.dataValues.id)

          const exp = Date.now() + 1000 * 60 * 60

          res.status(200).send({
              username: foundUser.dataValues.username,
              userId: foundUser.dataValues.id,
              token,
              exp
          })
        } else {
          throw 'Cannot log in. Please try again'
        }
      } else {
        throw 'Cannot log in. User does not exist'
      }
    } catch (error) {
      console.log("ERROR in login", error)
      res.status(400).send(error)
    }
  },
}