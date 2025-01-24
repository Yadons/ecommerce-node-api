"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const categoria_entity_1 = require("./modules/catalogo/domain/categoria/categoria.entity");
const categoria_map_1 = require("./modules/catalogo/mappers/categoria.map");
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
    ///////////////////////////////////////////////////////
    //Persistinto e Recuperando em Arquivos - File System//
    ///////////////////////////////////////////////////////
    let arrayCategoria = [];
    arrayCategoria.push(categoria.toDTO());
    arrayCategoria.push(categoria2.toDTO());
    (0, fs_1.writeFile)('categoria.json', JSON.stringify(arrayCategoria), function (error) {
        if (error)
            throw error;
        console.log('Arquivo Salvo com Sucesso!');
        (0, fs_1.readFile)('categoria.json', (error, dadoGravadoArquivo) => {
            if (error)
                throw error;
            console.log('Leitura de Arquivo!');
            let categoriasSalvas = JSON.parse(dadoGravadoArquivo.toString());
            categoriasSalvas.forEach(categoriaJSON => {
                console.log(categoriaJSON);
                console.log(categoria_map_1.CategoriaMap.toDomain(categoriaJSON));
            });
        });
    });
}
catch (error) {
    if (error instanceof domain_exception_1.DomainException) {
        console.log('Exceção de Domínio');
        console.log(error.message);
    }
    else {
        console.log('Outras exceções');
        console.log(error.message);
    }
}
finally {
    console.log("Ação que deve ser executada em caso de sucesso e em caso de exceção");
}
//# sourceMappingURL=index.js.map