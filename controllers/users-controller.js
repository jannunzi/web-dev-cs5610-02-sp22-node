const userDao = require('../database/users/users-dao')

const findAllUsers = async (req, res) => {
  const users = await userDao.findAllUsers()
  res.json(users)
}
const findUserById = async (req, res) => {
  const userId = req.params['id']
  const user = await userDao.findUserById(userId)
  if(user) {
    res.json(user)
  } else {
    res.sendStatus(404)
  }
}
const findUserByEmail = async (req, res) => {
  const email = req.params.email
  const user = await userDao.findUserByEmail(email)
  if(user) {
    res.json(user)
  } else {
    res.sendStatus(404)
  }
}
const findUserByCredentials = async (req, res) => {
  const credentials = req.body
  const {email, password} = credentials
  const user = await userDao.findUserByCredentials(
    email, password
  )
  if(user) {
    res.sendStatus(200)
  } else {
    res.sendStatus(403)
  }
}
const createUser = async (req, res) => {
  const user = req.body
  const insertedUser = await userDao.createUser(user)
  res.json(insertedUser)
}
const updateUser = async (req, res) => {
  const user = req.body
  const userId = req.params['id']
  const status = await userDao.updateUser(userId, user)
  res.json(status)
}
const deleteUser = async (req, res) => {
  const userId = req.params['id']
  const status = await userDao.deleteUser(userId)
  res.json(status)
}

module.exports = (app) => {
  app.get('/api/users', findAllUsers);
  app.get('/api/users/:id', findUserById);
  app.get('/api/users/email/:email', findUserByEmail);
  app.post('/api/users/credentials', findUserByCredentials);
  app.post('/api/users', createUser);
  app.put('/api/users/:id', updateUser);
  app.delete('/api/users/:id', deleteUser);
}
