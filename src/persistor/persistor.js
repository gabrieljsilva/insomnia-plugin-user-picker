const fs = require('fs')
const path = require('path')

module.exports = class Persistor {
  static #filePath = path.join(__dirname, 'user-picker-data.json');

  static async setItem(key, value) {
    try {
      await Persistor.checkIfPersistorFileExists()
      const data = await Persistor.getAll()
      data[key] = value
      await fs.promises.writeFile(Persistor.#filePath, JSON.stringify(data))
    } catch (error) {
      console.error(error)
    }
  }

  static getItem(key) {
    try {
      Persistor.checkIfPersistorFileExists()
      const data = Persistor.getAll()
      return data[key]
    } catch (error) {
      console.error(error)
    }
  }

  static getAll() {
    try {
      Persistor.checkIfPersistorFileExists()
      const data = fs.readFileSync(Persistor.#filePath, 'utf8')
      return JSON.parse(data)
    } catch (error) {
      console.error(error)
      return {}
    }
  }

  static checkIfPersistorFileExists() {
    if (!fs.existsSync(Persistor.#filePath)) {
      fs.writeFileSync(Persistor.#filePath, JSON.stringify({}))
    }
  }
}
