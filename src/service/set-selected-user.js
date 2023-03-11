const { Persistor } = require('../persistor')
const { SELECTED_USER } = require('../constants/persistor-keys.contants')

module.exports = async (user) => {
  await Persistor.setItem(SELECTED_USER, user)
}
