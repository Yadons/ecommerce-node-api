"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
const entity_1 = require("../../../../shared/domain/entity");
const categoria_map_1 = require("../../mappers/categoria.map");
const categoria_exceptions_1 = require("./categoria.exceptions");
class Categoria extends entity_1.Entity {
    //////////////
    //Gets e Sets//
    ///////////////
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value === null || value === undefined) {
            throw new categoria_exceptions_1.NomeCategoriaNuloOuIndefinido();
        }
        if (value.trim().length < 3) {
            throw new categoria_exceptions_1.NomeCategoriaTamanhoMinimoInvalido();
        }
        if (value.trim().length > 50) {
            throw new categoria_exceptions_1.NomeCategoriaTamanhoMaximoInvalido();
        }
        this._nome = value;
    }
    //////////////
    //Construtor//
    ///////////////
    constructor(categoria) {
        super(categoria.id);
        this.nome = categoria.nome;
    }
    ////////////////////////
    //Static Factory Method//
    ////////////////////////
    static criar(props) {
        let { nome } = props;
        return new Categoria({ nome });
    }
    static recuperar(props) {
        return new Categoria(props);
    }
    ////////////
    //Métodos//
    //////////
    toDTO() {
        return categoria_map_1.CategoriaMap.toDTO(this);
    }
}
exports.Categoria = Categoria;
//# sourceMappingURL=categoria.entity.js.map