const findAllUsers = require('../service/find-all-users')
const selectUserAction = require('../actions/select-user.action')
const { findSelectedUser } = require('../service')

module.exports = (scope) => {
  const users = findAllUsers()
  const selectedUser = findSelectedUser()

  return users.map((user) => {
    const isUserSelected = selectedUser?.identifier === user.identifier
    return {
      label: user.name,
      icon: isUserSelected ? 'fa-check' : 'fa-circle',
      action: async (context, data) => {
        await selectUserAction(user, context, data)
        scope.sync()
      }
    }
  })
}
