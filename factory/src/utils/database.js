class DataBase {

    constructor({connectionString}) {
        this.connectionString = connectionString
    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async connect() {
        await this.sleep(1000)
        return this
    }

    async find(query) {
        await this.sleep(1000)
        return [{name: 'Gabriel Gentil'}]
    }
}

module.exports = DataBase