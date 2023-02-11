const Persistor = require('../utils/persistor')
const {
  USER_STORE_KEY,
  SELECTED_USER
} = require('../constants/persistor-keys.contants')

async function syncUsers() {
  const users = Persistor.getItem(USER_STORE_KEY)
  const selectedUser = Persistor.getItem(SELECTED_USER)

  const userActions = users.map((user) => {
    return {
      label: `Select ${user.label}`,
      icon: selectedUser?.label === user.label ? 'fa-check' : 'fa-circle',
      action: async () => {
        await Persistor.setItem(SELECTED_USER, user)
        await syncUsers.bind(this)()
      }
    }
  })

  const deleteUserAction =
    this.workspaceActions[this.workspaceActions.length - 1]
  const [addUserAction] = this.workspaceActions

  this.workspaceActions = []
  this.workspaceActions.push(addUserAction, ...userActions)
  this.workspaceActions.push(deleteUserAction)
}

module.exports = syncUsers
