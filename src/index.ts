import { Categoria } from "./modules/catalogo/domain/categoria.entity";
import { RecuperarCategoriaProps } from "./modules/catalogo/domain/categoria.types";
import { DomainException } from "./shared/domain/domain.exception";

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

}
 catch (error:any) {
    if(error instanceof DomainException) {
        console.log(error.message);
    }

}
finally {
    console.log("Ação que deve ser executada em caso de sucesso e em caso de exceção");
}