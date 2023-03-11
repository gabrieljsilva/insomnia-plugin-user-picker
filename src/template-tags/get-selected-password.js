const { findSelectedUser } = require('../service')

module.exports = () => {
  return {
    name: 'currentSelectedUserPassword',
    displayName: 'Current User password',
    description: 'Extract user password string from selected user.',
    async run() {
      const user = findSelectedUser()
      return user?.password || 'User must be selected'
    }
  }
}
