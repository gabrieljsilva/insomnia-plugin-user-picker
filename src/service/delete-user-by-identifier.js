const findAllUsers = require('./find-all-users')
const { Persistor } = require('../persistor')
const { USER_STORE_KEY } = require('../constants/persistor-keys.contants')

module.exports = async (identifier) => {
  const users = await findAllUsers()
  const filteredUsers = users.filter((user) => user.identifier !== identifier)
  await Persistor.setItem(USER_STORE_KEY, filteredUsers)
}
