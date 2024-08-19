const UserRepository = require("../repo/userRepository")
const UserService = require("../service/userService")
const DataBase = require("../utils/database")

class UserFactory {
    static async createInstance() {
        const db = new DataBase({connectionString: 'mongodb://localhost:27017/test'})
        const dbConnection = await db.connect()
        const userRepository = new UserRepository({dbConnection})
        const userService = new UserService({userRepository})

        return userService
    }
}

module.exports = UserFactory