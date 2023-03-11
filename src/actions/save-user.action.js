const { findUserByIdentifier, saveUser } = require('../service')

module.exports = (scope) => {
  return {
    label: 'Add user',
    icon: 'fa-plus',
    action: async (context, data) => {
      console.log(context)
      console.log(data)

      const name = await context.app.prompt('Username')
      const identifier = await context.app.prompt(
        'Identifier (Login Username or e-mail)'
      )

      const userAlreadyAdded = findUserByIdentifier(identifier)

      if (userAlreadyAdded) {
        alert(`
        User: ${name} already added
        Please type another identifier
    `)

        return
      }

      const password = await context.app.prompt('User password')

      await saveUser({
        name,
        identifier,
        password
      })

      scope.sync()
    }
  }
}
