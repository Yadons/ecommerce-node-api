"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoria_entity_1 = require("./modules/catalogo/domain/categoria.entity");
const domain_exception_1 = require("./shared/domain/domain.exception");
try {
    ///////////////////
    //Criar Categoria//
    //////////////////
    let categoria;
    categoria = categoria_entity_1.Categoria.criar({ nome: 'Teste' });
    console.log(categoria);
    ///////////////////////
    //Recuperar Categoria//
    //////////////////////
    let propsCategoria = {
        id: 'b02f5f98-f718-441c-8e6c-63ffb08f495b',
        nome: 'Mesa'
    };
    let categoria2 = categoria_entity_1.Categoria.recuperar(propsCategoria);
    console.log(categoria2);
}
catch (error) {
    if (error instanceof domain_exception_1.DomainException) {
        console.log(error.message);
    }
}
finally {
    console.log("Ação que deve ser executada em caso de sucesso e em caso de exceção");
}
//# sourceMappingURL=index.js.map