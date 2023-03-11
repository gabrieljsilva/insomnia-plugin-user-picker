const { listAllUsersActionMap } = require('../actions-map')
const saveUserAction = require('./save-user.action')
const deleteUserAction = require('./delete-user.action')

module.exports = (scope) => {
  return () => {
    scope.workspaceActions = [
      saveUserAction(scope),
      ...listAllUsersActionMap(scope),
      deleteUserAction(scope)
    ]
  }
}
