"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoExceptions = void 0;
const domain_exception_1 = require("../../../../shared/domain/domain.exception");
class ProdutoException extends domain_exception_1.DomainException {
    constructor(message = '⚠️ Exceção de Domínio Genérica da Entidade Produto') {
        super(message);
        this.name = 'ProdutoException';
        this.message = message;
    }
}
class NomeProdutoTamanhoMinimoInvalido extends ProdutoException {
    constructor(message = '⚠️ O nome do produto não possui um tamanho mínimo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMinimoInvalido';
        this.message = message;
    }
}
class NomeProdutoTamanhoMaximoInvalido extends ProdutoException {
    constructor(message = '⚠️ O nome do produto não possui um tamanho máximo válido.') {
        super(message);
        this.name = 'NomeProdutoTamanhoMaximoInvalido';
        this.message = message;
    }
}
class DescricaoProdutoTamanhoMinimoInvalido extends ProdutoException {
    constructor(message = '⚠️ A descrição do produto não possui um tamanho mínimo válido.') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMinimoInvalido';
        this.message = message;
    }
}
class DescricaoProdutoTamanhoMaximoInvalido extends ProdutoException {
    constructor(message = '⚠️ A descrição do produto não possui um tamanho máximo válido.') {
        super(message);
        this.name = 'DescricaoProdutoTamanhoMaximoInvalido';
        this.message = message;
    }
}
class ValorMinimoProdutoInvalido extends ProdutoException {
    constructor(message = '⚠️ O valor mínimo do produto é inválido.') {
        super(message);
        this.name = 'ValorMinimoProdutoInvalido';
        this.message = message;
    }
}
class QtdMinimaCategoriasProdutoInvalida extends ProdutoException {
    constructor(message = '⚠️ A quantidade mínima de categorias produto é inválida.') {
        super(message);
        this.name = 'QtdMinimaCategoriasProdutoInvalida';
        this.message = message;
    }
}
class QtdMaximaCategoriasProdutoInvalida extends ProdutoException {
    constructor(message = '⚠️ A quantidade máxima de categorias do produto é inválida.') {
        super(message);
        this.name = 'QtdMaximaCategoriasProdutoInvalida';
        this.message = message;
    }
}
class ProdutoJaPossuiQtdMaximaCategorias extends ProdutoException {
    constructor(message = '⚠️ O produto já possui a quantidade máxima de categorias.') {
        super(message);
        this.name = 'ProdutoJaPossuiQtdMaximaCategorias';
        this.message = message;
    }
}
class ProdutoJaPossuiCategoriaInformada extends ProdutoException {
    constructor(message = '⚠️ O produto já possui a categoria informada.') {
        super(message);
        this.name = 'ProdutoJaPossuiCategoriaInformada';
        this.message = message;
    }
}
class ProdutoJaPossuiQtdMinimaCategorias extends ProdutoException {
    constructor(message = '⚠️ O produto já possui a quantidade mínima de categorias.') {
        super(message);
        this.name = 'ProdutoJaPossuiQtdMinimaCategorias';
        this.message = message;
    }
}
class ProdutoNaoPossuiCategoriaInformada extends ProdutoException {
    constructor(message = '⚠️ O produto não possui a categoria informada.') {
        super(message);
        this.name = 'ProdutoNaoPossuiCategoriaInformada';
        this.message = message;
    }
}
const ProdutoExceptions = {
    ProdutoException: ProdutoException,
    NomeProdutoTamanhoMinimoInvalido: NomeProdutoTamanhoMinimoInvalido,
    NomeProdutoTamanhoMaximoInvalido: NomeProdutoTamanhoMaximoInvalido,
    DescricaoProdutoTamanhoMinimoInvalido: DescricaoProdutoTamanhoMinimoInvalido,
    DescricaoProdutoTamanhoMaximoInvalido: DescricaoProdutoTamanhoMaximoInvalido,
    ValorMinimoProdutoInvalido: ValorMinimoProdutoInvalido,
    QtdMinimaCategoriasProdutoInvalida: QtdMinimaCategoriasProdutoInvalida,
    QtdMaximaCategoriasProdutoInvalida: QtdMaximaCategoriasProdutoInvalida,
    ProdutoJaPossuiQtdMaximaCategorias: ProdutoJaPossuiQtdMaximaCategorias,
    ProdutoJaPossuiCategoriaInformada: ProdutoJaPossuiCategoriaInformada,
    ProdutoJaPossuiQtdMinimaCategorias: ProdutoJaPossuiQtdMinimaCategorias,
    ProdutoNaoPossuiCategoriaInformada: ProdutoNaoPossuiCategoriaInformada
};
exports.ProdutoExceptions = ProdutoExceptions;
//# sourceMappingURL=produto.exceptions.js.map