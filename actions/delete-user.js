const Persistor = require('../utils/persistor')
const {
  USER_STORE_KEY,
  SELECTED_USER
} = require('../constants/persistor-keys.contants')
const syncUsers = require('./sync-users')

module.exports = async function (context) {
  const users = Persistor.getItem(USER_STORE_KEY)

  const handleDeleteUser = async (item) => {
    const selectedUser = Persistor.getItem(SELECTED_USER)
    const updatedUserList = users.filter((user) => user.label !== item)

    if (selectedUser && selectedUser?.label === item) {
      if (updatedUserList.length > 0) {
        await Persistor.setItem(
          SELECTED_USER,
          updatedUserList[updatedUserList.length - 1]
        )
      } else {
        await Persistor.setItem(SELECTED_USER, null)
      }
    }

    await Persistor.setItem(USER_STORE_KEY, updatedUserList)
    await syncUsers.bind(this)()
  }

  await context.app.prompt('Remove user', {
    title: 'Remove a user',
    label: 'Users',
    inputType: 'hidden',
    type: 'select',
    submitName: 'Finish',
    cancelable: true,
    hint: users.length > 0 ? undefined : "There's no users to delete",
    hints: users.map((user) => user.label),
    onDeleteHint: handleDeleteUser
  })
}
