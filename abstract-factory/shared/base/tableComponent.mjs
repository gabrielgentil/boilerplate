import NotImplementedException from "../notimplementedExceptiom.mjs";


export default class TableComponent {
    render(data) {
        throw new NotImplementedException(this.render.name)
    }
}

