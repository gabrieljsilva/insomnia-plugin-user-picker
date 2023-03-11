const {
  getSelectedPassword,
  getSelectedUser,
  getSelectedIdentifier
} = require('./template-tags')
const { syncWorkspace } = require('./actions')

module.exports.templateTags = [
  getSelectedIdentifier(),
  getSelectedPassword(),
  getSelectedUser()
]
module.exports.sync = syncWorkspace(this)
module.exports.sync()
