const express = require('express')
const {
  Users
} = require('../db')

const route = express.Router()

route.get('/signup', async (req, res) => {
  res.send(await Users.findAll())
})

route.post('/signup', async (req, res) => {

  try {
    res.status(201).send(await Users.create({
      name: req.body.username
      
      
    }))
  } catch (err) {
    res.status(400).send({
      message: err.message
      
    })
  }
})

module.exports = route
