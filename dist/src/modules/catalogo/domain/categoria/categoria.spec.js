"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const vitest_1 = require("vitest");
const domain_exception_1 = require("../../../../shared/domain/domain.exception");
const categoria_entity_1 = require("./categoria.entity");
const categoria_exceptions_1 = require("./categoria.exceptions");
//Suítes de Testes de Unidade - Entidade de Domínio.
//Usando a descrição, você pode definir como um conjunto de testes ou benchmarks relacionados.
(0, vitest_1.describe)('Entidade de Domínio: Criar Categoria', () => {
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)('Deve criar uma Categoria Válida', async () => {
        //Dado (Given)
        const categoriaValida = {
            nome: faker_1.faker.string.alpha({ length: { min: 3, max: 50 } })
        };
        console.log(categoriaValida);
        //Quando (when) e Então (then)
        (0, vitest_1.expect)(categoria_entity_1.Categoria.criar(categoriaValida))
            .to.toBeInstanceOf(categoria_entity_1.Categoria);
    });
    (0, vitest_1.test)('Não deve Criar Categoria Com Nome Inválido (Tamanho Mínimo)', async => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido = {
            nome: 'ca'
        };
        //Quando (when) e Então (then)
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.criar(categoriaNomeInvalido))
            .toThrowError(categoria_exceptions_1.NomeCategoriaTamanhoMinimoInvalido);
    });
    (0, vitest_1.test)('Não deve Criar Categoria Com Nome Inválido (Tamanho Máximo)', async => {
        //Dado (Given)
        //Nome maior que 50 caracteres.
        const categoriaNomeInvalido = {
            nome: 'ca12313255156548778855135154514512155646751521451565985545454'
        };
        //Quando (when) e Então (then)
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.criar(categoriaNomeInvalido))
            .toThrowError(categoria_exceptions_1.NomeCategoriaTamanhoMaximoInvalido);
    });
});
(0, vitest_1.describe)('Entidade de Domínio: Recuperar Categoria ', () => {
    //Teste define um conjunto de expectativas relacionadas.
    (0, vitest_1.test)('Deve recuperar uma Categoria Válida', async () => {
        //Dado (Given)
        const categoriaValida = {
            id: 'b02f5f98-f718-441c-8e6c-63ffb08f495b',
            nome: 'cama'
        };
        //Quando (when) e Então (then)
        (0, vitest_1.expect)(categoria_entity_1.Categoria.recuperar(categoriaValida))
            .toBeInstanceOf(categoria_entity_1.Categoria);
    });
    (0, vitest_1.test)('Não deve recuperar Categoria com ID Inválido (UUID Inválido)', async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaIdInvalida = {
            id: '1234',
            nome: 'cama'
        };
        //Quando (when) e Então (then)
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.recuperar(categoriaIdInvalida))
            .toThrowError(domain_exception_1.IDEntityUUIDInvalid);
    });
    (0, vitest_1.test)('Não deve recuperar Categoria com Nome Inválido (Tamanho Mínimo)', async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido = {
            id: 'b02f5f98-f718-441c-8e6c-63ffb08f495b',
            nome: 'ma'
        };
        //Quando (when) e Então (then)
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.recuperar(categoriaNomeInvalido))
            .toThrowError(categoria_exceptions_1.NomeCategoriaTamanhoMinimoInvalido);
    });
    (0, vitest_1.test)('Não deve recuperar Categoria com Nome Inválido (Tamanho Máximo)', async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido = {
            id: 'b02f5f98-f718-441c-8e6c-63ffb08f495b',
            nome: '123456789123546578511022655145525651231556541645651535456'
        };
        //Quando (when) e Então (then)
        (0, vitest_1.expect)(() => categoria_entity_1.Categoria.recuperar(categoriaNomeInvalido))
            .toThrowError(categoria_exceptions_1.NomeCategoriaTamanhoMaximoInvalido);
    });
});
//# sourceMappingURL=categoria.spec.js.map