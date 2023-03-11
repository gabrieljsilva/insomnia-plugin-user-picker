const { Persistor } = require('../persistor')
const { USER_STORE_KEY } = require('../constants/persistor-keys.contants')

module.exports = () => {
  return Persistor.getItem(USER_STORE_KEY) || []
}
