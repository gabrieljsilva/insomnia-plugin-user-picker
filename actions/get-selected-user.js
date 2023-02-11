const Persistor = require('../utils/persistor')
const { SELECTED_USER } = require('../constants/persistor-keys.contants')

module.exports = async function () {
  const user = Persistor.getItem(SELECTED_USER)
  return user || null
}
