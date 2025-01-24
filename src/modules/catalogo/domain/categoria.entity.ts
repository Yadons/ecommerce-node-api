import { CriarCategoriaProps, ICategoria } from "./categoria.types";

class Categoria implements ICategoria {
   
    ///////////////////////
    //Atributos de Classe//
    //////////////////////

    private _id: string;
    private _nome: string;
    
    //////////////
    //Gets e Sets//
    ///////////////
    
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        if(value === null || value === undefined){
            throw Error("nome da categoria é nulo ou indefinido")
        }

        if(value.trim().length < 3){
            throw Error("nome da categoria não possui um tamanho mínimo válido!")

        }

        if(value.trim().length > 50){
            throw Error("nome da categoria não possui um tamanho máximo válido!")
        }
        this._nome = value;
    }

    //////////////
    //Construtor//
    ///////////////

    private constructor(categoria: ICategoria) {
        this.id = categoria.id;
        this.nome = categoria.nome;
    }

     ////////////////////////
    //Static Factory Method//
    ////////////////////////

    public static criar(props: CriarCategoriaProps): Categoria {
        let id = "12345 "; // Refatorar para gerar id com UUID
        let {nome} = props;
        return new Categoria({id, nome}) 
    }
}

export {Categoria}