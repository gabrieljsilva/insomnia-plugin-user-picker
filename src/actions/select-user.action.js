const { setSelectedUser } = require('../service')

module.exports = async (user, context, data) => {
  await setSelectedUser(user)
}
