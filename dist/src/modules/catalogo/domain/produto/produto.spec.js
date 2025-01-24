"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const produto_entity_1 = require("./produto.entity");
const categoria_entity_1 = require("../categoria/categoria.entity");
const produto_exceptions_1 = require("./produto.exceptions");
//Suite de Testes de Unidade - Entidade de Domínio
//Usando o 'describe', você pode definir como um conjunto de testes ou benchmarks relacionados
(0, vitest_1.describe)('Entidade de Domínio: Produto', () => {
    (0, vitest_1.describe)('Criar Produto', () => {
        //Teste define um conjunto de expectativas relacionadas. 
        (0, vitest_1.test)('Deve Criar Um Produto Válido', async () => {
            let categoriasValidas = [];
            categoriasValidas.push(categoria_entity_1.Categoria.criar({ nome: 'Banho' }));
            //Dado (Given)
            const produtoValido = {
                nome: 'Toalha',
                descricao: 'Toalha de Algodão',
                valor: 10,
                categorias: categoriasValidas
            };
            //Quando (When) e Então (Then)
            (0, vitest_1.expect)(produto_entity_1.Produto.criar(produtoValido))
                .to.be.instanceof(produto_entity_1.Produto);
        });
    });
    //Teste define um conjunto de expectativas relacionadas. 
    (0, vitest_1.test)('Não Deve Criar Produto Com Nome Inválido (Tamanho Mínimo)', async () => {
        let categoriasValidas = [];
        categoriasValidas.push(categoria_entity_1.Categoria.criar({ nome: 'Banho' }));
        //Dado (Given)
        //Nome menor que cinco caracteres
        const produtoNomeInvalido = {
            nome: 'Toa',
            descricao: 'Toalha de Algodão',
            valor: 10,
            categorias: categoriasValidas
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido))
            .toThrowError(produto_exceptions_1.ProdutoExceptions.NomeProdutoTamanhoMinimoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas. 
    (0, vitest_1.test)('Não Deve Criar Produto Com Nome Inválido (Tamanho Máximo)', async () => {
        let categoriasValidas = [];
        categoriasValidas.push(categoria_entity_1.Categoria.criar({ nome: 'Banho' }));
        //Dado (Given)
        //Nome maior que cinquenta caracteres
        const produtoNomeInvalido = {
            nome: 'abcdsadadasaflkvbkfdkgsdjkvcaadADASDsfafafvdgsdgcafsadzcacfasfsacas',
            descricao: 'Toalha de Algodão',
            valor: 10,
            categorias: categoriasValidas
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido))
            .toThrowError(produto_exceptions_1.ProdutoExceptions.NomeProdutoTamanhoMaximoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas. 
    (0, vitest_1.test)('Não Deve Criar Produto Com Descrição Inválida (Tamanho Mínimo)', async () => {
        let categoriasValidas = [];
        categoriasValidas.push(categoria_entity_1.Categoria.criar({ nome: 'Banho' }));
        //Dado (Given)
        //Descrição menor que dez caracteres
        const produtoNomeInvalido = {
            nome: 'Toalha',
            descricao: 'Algodão',
            valor: 10,
            categorias: categoriasValidas
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido))
            .toThrowError(produto_exceptions_1.ProdutoExceptions.DescricaoProdutoTamanhoMinimoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas. 
    (0, vitest_1.test)('Não Deve Criar Produto Com Descrição Inválida (Tamanho Máximo)', async () => {
        let categoriasValidas = [];
        categoriasValidas.push(categoria_entity_1.Categoria.criar({ nome: 'Banho' }));
        //Dado (Given)
        //Descrição maior que duzentos caracteres
        const produtoNomeInvalido = {
            nome: 'Toalha',
            descricao: 'sfsakjfdsjkdçjksdvsakvsdjkvskdvksdvjksdavjksdavjksdjkvsjkdvsdjklvsjkdvsjkldvjksavjksdjklvsjkdlvsjkdlvsjkdvçjklsdvjksdjkvsdklvsdjklvsjkldvskdvjklsdvjklsdvjklsdajklvsadjklvskdavjklsavjklsdvjksdjkvsjklvjklsdvjklsdvjklsdjvsdjvsdavsdjhvsdvsdsvvsdgsdgevsdgsdvbxcbxvbxbx',
            valor: 10,
            categorias: categoriasValidas
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido))
            .toThrowError(produto_exceptions_1.ProdutoExceptions.DescricaoProdutoTamanhoMaximoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas. 
    (0, vitest_1.test)('Não Deve Criar Produto Com Valor Mínimo Inválido', async () => {
        let categoriasValidas = [];
        categoriasValidas.push(categoria_entity_1.Categoria.criar({ nome: 'Banho' }));
        //Dado (Given)
        //Valor mínimo menor que 0
        const produtoNomeInvalido = {
            nome: 'Toalha',
            descricao: 'Toalha de Banho',
            valor: -50,
            categorias: categoriasValidas
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido))
            .toThrowError(produto_exceptions_1.ProdutoExceptions.ValorMinimoProdutoInvalido);
    });
    //Teste define um conjunto de expectativas relacionadas. 
    (0, vitest_1.test)('Não Deve Criar Produto Com Número Mínimo de Categorias Inválido', async () => {
        let categoriasQtdMinInvalidas = [];
        //Dado (Given)
        //Nenhuma categoria é atribuida - menor que 1
        const produtoNomeInvalido = {
            nome: 'Toalha',
            descricao: 'Toalha de Banho',
            valor: 10,
            categorias: categoriasQtdMinInvalidas
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido))
            .toThrowError(produto_exceptions_1.ProdutoExceptions.QtdMinimaCategoriasProdutoInvalida);
    });
    //Teste define um conjunto de expectativas relacionadas. 
    (0, vitest_1.test)('Não Deve Criar Produto Com Número Máximo de Categorias Inválido', async () => {
        let categoriasQtdMaxInvalidas = [];
        categoriasQtdMaxInvalidas.push(categoria_entity_1.Categoria.criar({ nome: 'Cama' }));
        categoriasQtdMaxInvalidas.push(categoria_entity_1.Categoria.criar({ nome: 'Mesa' }));
        categoriasQtdMaxInvalidas.push(categoria_entity_1.Categoria.criar({ nome: 'Enxoval' }));
        categoriasQtdMaxInvalidas.push(categoria_entity_1.Categoria.criar({ nome: 'Banho' }));
        //Dado (Given)
        //4 categorias é atribuidas - maior que 3
        const produtoNomeInvalido = {
            nome: 'Toalha',
            descricao: 'Toalha de Banho',
            valor: 10,
            categorias: categoriasQtdMaxInvalidas
        };
        //Quando (When) e Então (Then)
        (0, vitest_1.expect)(() => produto_entity_1.Produto.criar(produtoNomeInvalido))
            .toThrowError(produto_exceptions_1.ProdutoExceptions.QtdMaximaCategoriasProdutoInvalida);
    });
});
//# sourceMappingURL=produto.spec.js.map