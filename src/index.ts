import { readFile, writeFile } from "fs";
import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { RecuperarCategoriaProps } from "@modules/catalogo/domain/categoria/categoria.types";
import { CategoriaMap } from "@modules/catalogo/mappers/categoria.map";
import { DomainException } from "@shared/domain/domain.exception";

try {
    
    ///////////////////
    //Criar Categoria//
    //////////////////

    let categoria: Categoria;
    categoria = Categoria.criar({nome:'Teste'});
    console.log(categoria);

    ///////////////////////
    //Recuperar Categoria//
    //////////////////////

    let propsCategoria: RecuperarCategoriaProps = {
        id:'b02f5f98-f718-441c-8e6c-63ffb08f495b',
        nome: 'Mesa'
    }
    let categoria2: Categoria = Categoria.recuperar(propsCategoria)
    console.log(categoria2);

///////////////////////////////////////////////////////
//Persistinto e Recuperando em Arquivos - File System//
///////////////////////////////////////////////////////

let arrayCategoria = [];
arrayCategoria.push(categoria.toDTO());
arrayCategoria.push(categoria2.toDTO());

writeFile('categoria.json', JSON.stringify(arrayCategoria), function (error:any){
    if(error) throw error;
    console.log('Arquivo Salvo com Sucesso!');
    readFile('categoria.json', (error, dadoGravadoArquivo) => {
        if(error) throw error;
        console.log('Leitura de Arquivo!');
        let categoriasSalvas: [] = JSON.parse(dadoGravadoArquivo.toString());
        categoriasSalvas.forEach(categoriaJSON => {
            console.log(categoriaJSON);
            console.log(CategoriaMap.toDomain(categoriaJSON));
        })
       
    });
});

}
 catch (error:any) {
    if(error instanceof DomainException) {
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