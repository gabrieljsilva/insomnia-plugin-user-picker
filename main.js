const addUser = require('./actions/add-user')
const syncUser = require('./actions/sync-users')
const deleteUser = require('./actions/delete-user')
const getSelectedUser = require('./actions/get-selected-user')

module.exports.workspaceActions = [
  {
    label: 'Add user',
    icon: 'fa-plus',
    action: addUser.bind(this)
  },
  {
    label: 'Remove user',
    icon: 'fa-trash',
    action: deleteUser.bind(this)
  }
]

syncUser.bind(this)()

module.exports.templateTags = [
  {
    name: 'selected_user_email',
    displayName: 'User E-mail',
    description: 'Extract e-mail string from selected user.',
    async run() {
      const user = await getSelectedUser.bind(this)()
      return user?.username || 'User must be selected'
    }
  },
  {
    name: 'selected_user_password',
    displayName: 'User Password',
    description: 'Extract e-mail string from selected user.',
    async run() {
      const user = await getSelectedUser.bind(this)()
      return user?.password || 'User must be selected'
    }
  }
]
