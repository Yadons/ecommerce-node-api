import { ProdutoMap } from "@modules/catalogo/mappers/produto.map";
import { Entity } from "@shared/domain/entity";
import { Categoria } from "../categoria/categoria.entity";
import { ProdutoExceptions } from "./produto.exceptions";
import { CriarProdutoProps, IProduto, RecuperarProdutoProps } from "./produto.types";

class Produto extends Entity<IProduto> implements IProduto {

    ///////////////////////
    //Atributos de Classe//
    ///////////////////////

    private _nome: string;
    private _descricao: string;
    private _valor: number;
    private _categorias: Array<Categoria>;
    private _dataCriacao?: Date;
    private _dataAtualizacao?: Date;
    private _dataExclusao?: Date | null;

    ///////////////
    //Gets e Sets//
    ///////////////

    public get nome(): string {
        return this._nome;
    }

    private set nome(value: string) {
        if(value.trim().length < 5 ) {
            throw new ProdutoExceptions.NomeProdutoTamanhoMinimoInvalido();
        }

        if (value.trim().length > 50) {
            throw new ProdutoExceptions.NomeProdutoTamanhoMaximoInvalido();
        }
        
        this._nome = value;
    }

    public get descricao(): string {
        return this._descricao;
    }

    private set descricao(value: string) {
        if(value.trim().length < 10 ) {
            throw new ProdutoExceptions.DescricaoProdutoTamanhoMinimoInvalido();
        }

        if (value.trim().length > 200) {
            throw new ProdutoExceptions.DescricaoProdutoTamanhoMaximoInvalido();
        }
        
        this._descricao = value;
    }

    public get valor(): number {
        return this._valor;
    }

    private set valor(value: number) {
        if(value < 0 ) {
            throw new ProdutoExceptions.ValorMinimoProdutoInvalido();
        }

        this._valor = value;
    }

    public get categorias(): Array<Categoria> {
        return this._categorias;
    }

    private set categorias(value: Array<Categoria>) {
        if(value.length < 1 ) {
            throw new ProdutoExceptions.QtdMinimaCategoriasProdutoInvalida();
        }

        if (value.length > 3) {
            throw new ProdutoExceptions.QtdMaximaCategoriasProdutoInvalida();
        }
        this._categorias = value;
    }
    
    public get dataCriacao(): Date | undefined {
        return this._dataCriacao;
    }

    private set dataCriacao(value: Date | undefined) {
        this._dataCriacao = value;
    }

    public get dataAtualizacao(): Date | undefined {
        return this._dataAtualizacao;
    }

    private set dataAtualizacao(value: Date | undefined) {
        this._dataAtualizacao = value;
    }

    public get dataExclusao(): Date | null | undefined {
        return this._dataExclusao;
    }

    private set dataExclusao(value: Date | null | undefined) {
        this._dataExclusao = value;
    }

     
    //////////////
    //Construtor//
    //////////////

    private constructor(produto: IProduto) {
        super(produto.id)
        this.nome = produto.nome;
        this.descricao = produto.descricao;
        this.valor = produto.valor;
        this.categorias = produto.categorias;
        this.dataCriacao = produto.dataCriacao;
        this.dataAtualizacao = produto.dataAtualizacao;
        this.dataExclusao = produto.dataExclusao;
    }

      /////////////////////////
    //Static Factory Method//
    /////////////////////////

    public static criar(props: CriarProdutoProps): Produto {
        return new Produto(props);
    }

    public static recuperar(props: RecuperarProdutoProps): Produto {
        return new Produto(props);
    }

     ///////////
    //Métodos//
    ///////////

    public toDTO(): IProduto {
        return ProdutoMap.toDTO(this);
    }

    public estaDeletado(): boolean {
        return this.dataExclusao !== null ? true : false
    }
    

}

export { Produto };

