import NotImplementedException from "../notimplementedExceptiom.mjs";


export default class ViewFactory {
    createTable() {
        throw new NotImplementedException(this.createTable.name)
    }
}