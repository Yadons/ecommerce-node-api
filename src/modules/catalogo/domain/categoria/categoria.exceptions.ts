import { DomainException } from "../../../../shared/domain/domain.exception";

class CategoriaException extends DomainException {
    public constructor(message: string = 'Exceção de Domínio Genérico da Entidade Categoria'){
        super(message);
        this.name = 'CategoriaException'
        this.message = message;
    }
}

class NomeCategoriaNuloOuIndefinido extends CategoriaException{
    public constructor(message: string = 'O nome da categoria é nulo ou indefinido.'){
        super(message);
        this.name = 'NomeCategoriaNuloOuIndefinido'
        this.message = message;
    }
}

class NomeCategoriaTamanhoMinimoInvalido extends CategoriaException {
    public constructor(message: string = 'O nome da categoria não possui um tamanho mínimo válido.'){
        super(message);
        this.name = 'NomeCategoriaTamanhoMinimoInvalido'
        this.message = message;
    }
}

class NomeCategoriaTamanhoMaximoInvalido extends CategoriaException {
    public constructor(message: string = 'O nome da categoria não possui um tamanho máximo válido.'){
        super(message);
        this.name = 'NomeCategoriaTamanhoMaximoInvalido'
        this.message = message;
    }
}

export {
    CategoriaException,
    NomeCategoriaNuloOuIndefinido, NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido
};
