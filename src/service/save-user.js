const findAllUsers = require('./find-all-users')
const { Persistor } = require('../persistor')
const { USER_STORE_KEY } = require('../constants/persistor-keys.contants')

module.exports = async (user) => {
  const users = await findAllUsers()
  users.push(user)
  await Persistor.setItem(USER_STORE_KEY, users)
}
