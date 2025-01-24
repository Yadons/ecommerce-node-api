//Todos os atributos/propriedade que uma categoria deve ter no sistema

import { IDatasControle, keysDatasControle } from "@shared/domain/datas.types";

//Auxilia na criação de invariantes e modelos ricos
interface ICategoria extends IDatasControle {
    id?: string;
    nome: string
}

//Atributos que são necessários para criar uma categoria
//Garantir a integridade dos dados de um objeto
type CriarCategoriaProps = Omit<ICategoria, "id" | keysDatasControle>;

//Atributos que são necessários para recuperar uma categoria
type RecuperarCategoriaProps = ICategoria & {
    id: NonNullable<ICategoria['id']>
};

export {ICategoria, CriarCategoriaProps, RecuperarCategoriaProps};