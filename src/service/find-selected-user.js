const { Persistor } = require('../persistor')
const { SELECTED_USER } = require('../constants/persistor-keys.contants')

module.exports = () => {
  return Persistor.getItem(SELECTED_USER)
}
