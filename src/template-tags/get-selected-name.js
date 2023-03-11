const { findSelectedUser } = require('../service')

module.exports = () => {
  return {
    name: 'currentSelectedName',
    displayName: 'Current User name',
    description: 'Extract user name string from selected user.',
    async run() {
      const user = findSelectedUser()
      return user?.name || 'User must be selected'
    }
  }
}
