export default class NotImplementedException extends Error {
    constructor(message) {
        super(`the method ${message} is not implemented`)
        this.name = 'NotImplementedException'
    }
}