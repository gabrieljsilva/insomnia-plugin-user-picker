const { findSelectedUser } = require('../service')

module.exports = () => {
  return {
    name: 'currentSelectedUserIdentifier',
    displayName: 'Current User identifier',
    description: 'Extract user identifier string from selected user.',
    async run() {
      const user = findSelectedUser()
      return user?.identifier || 'User must be selected'
    }
  }
}
