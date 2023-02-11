const Persistor = require('../utils/persistor')
const {
  USER_STORE_KEY,
  SELECTED_USER
} = require('../constants/persistor-keys.contants')
const syncUsers = require('./sync-users')

module.exports = async function (context) {
  const users = (await Persistor.getItem(USER_STORE_KEY)) || []
  const label = await context.app.prompt('Username label')
  const userAlreadyAdded = users.some((user) => user.label === label)

  if (userAlreadyAdded) {
    context.app.alert(`User ${label} already added`)
    return
  }

  const username = await context.app.prompt('Username or e-mail')
  const password = await context.app.prompt('User password')
  const user = {
    label,
    username,
    password
  }

  users.push(user)
  await Persistor.setItem(USER_STORE_KEY, users)
  await syncUsers.bind(this)()

  if (users.length === 1) {
    await Persistor.setItem(SELECTED_USER, user)
  }
}
