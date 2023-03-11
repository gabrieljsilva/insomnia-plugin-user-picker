const findAllUsers = require('./find-all-users')
const { Persistor } = require('../persistor')
const {
  USER_STORE_KEY,
  SELECTED_USER
} = require('../constants/persistor-keys.contants')

module.exports = async (user) => {
  const { identifier } = user
  const users = await findAllUsers()
  const userIndex = users.findIndex((user) => (user.identifier = identifier))
  users[userIndex] = user

  const selectedUser = Persistor.getItem(SELECTED_USER)
  if (selectedUser && selectedUser.identifier === identifier) {
    await Persistor.setItem(SELECTED_USER, user)
  }

  await Persistor.setItem(USER_STORE_KEY, users)
}
