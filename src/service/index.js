const findUserByIdentifier = require('./find-user-by-identifier')
const saveUser = require('./save-user')
const findAllUsers = require('./find-all-users')
const deleteUserByIdentifier = require('./delete-user-by-identifier')
const updateUserByIdentifier = require('./update-user-by-identifier')
const setSelectedUser = require('./set-selected-user')
const findSelectedUser = require('./find-selected-user')

module.exports = {
  findUserByIdentifier,
  saveUser,
  findAllUsers,
  deleteUserByIdentifier,
  updateUserByIdentifier,
  setSelectedUser,
  findSelectedUser
}
