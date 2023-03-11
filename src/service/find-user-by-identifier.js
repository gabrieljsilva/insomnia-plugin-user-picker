const { Persistor } = require('../persistor')
const { USER_STORE_KEY } = require('../constants/persistor-keys.contants')

module.exports = (identifier) => {
  const users = Persistor.getItem(USER_STORE_KEY) || []
  return users.find((user) => user.identifier === identifier)
}
