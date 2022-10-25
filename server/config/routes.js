const express = require('express')
const routes = express.Router()

const usersCtlr = require('../app/controllers/usersCltr')

routes.get('/api/users',usersCtlr.listUsers)
routes.post('/api/users/register',usersCtlr.registerUser)
routes.post('/api/users/login',usersCtlr.login)
routes.delete('/api/users/delete/:id',usersCtlr.removeUser)

module.exports = routes