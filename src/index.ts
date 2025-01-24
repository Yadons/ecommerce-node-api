import { Categoria } from "./modules/catalogo/domain/categoria.entity";

try { 
    let categoria = Categoria.criar({nome:'Te'});
    console.log(categoria)
}
 catch (error:any) {
    console.log(error.message);

}
finally {
    console.log("Açãp que deve ser executada em caso de sucesso e em caso de exceção");
}