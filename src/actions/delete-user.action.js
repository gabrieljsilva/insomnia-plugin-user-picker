const { Persistor } = require('../persistor')
const { USER_STORE_KEY } = require('../constants/persistor-keys.contants')
const { findUserByIdentifier, deleteUserByIdentifier } = require('../service')

module.exports = (scope) => {
  return {
    label: 'Delete user',
    icon: 'fa-trash',
    async action(context, data) {
      const users = Persistor.getItem(USER_STORE_KEY)

      const handleDeleteUser = async (identifier) => {
        const user = findUserByIdentifier(identifier)
        if (!user) {
          alert(`cannot find identifier: ${identifier}`)
          return
        }
        await deleteUserByIdentifier(identifier)
        scope.sync()
      }

      await context.app.prompt('Remove user', {
        title: 'Remove a user',
        label: 'Identifier',
        inputType: 'hidden',
        type: 'text',
        hints: users.map((user) => user.identifier),
        submitName: 'Finish',
        onDeleteHint: handleDeleteUser
      })
    }
  }
}
