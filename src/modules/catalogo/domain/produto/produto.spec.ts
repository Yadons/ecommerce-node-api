import { faker } from "@faker-js/faker";
import { beforeAll, describe, expect, test } from "vitest";
import { Categoria } from "../categoria/categoria.entity";
import { Produto } from "./produto.entity";
import { ProdutoExceptions } from "./produto.exceptions";
import { CriarProdutoProps } from "./produto.types";


let NomeProdutoValido: string;
let NomeProdutoTamanhoMinInvalido: string;
let NomeProdutoTamanhoMaxInvalido: string;
let DescricaoProdutovalido: string;
let DescricaoProdutoTamanhoMinInvalido: string;
let DescricaoProdutoTamanhoMaxInvalido: string;
let ValorProdutoValido: number;
let ValorMinProdutoInvalido: number;
let CategoriasValidas: Array<Categoria>;
let CategoriasQtdMinInvalidas: Array<Categoria>;
let CategoriasQtdMaxInvalidas: Array<Categoria>;

beforeAll( async () => {
    
    //Preenchendo as variáveis com dados em conformidade com as restições da regra de negócio para o nome do produto
    NomeProdutoValido = faker.string.alpha({length:{min:5, max:50}});
    NomeProdutoTamanhoMinInvalido = faker.string.alpha({length:{min:0, max:4}});
    NomeProdutoTamanhoMaxInvalido = faker.string.alpha({length:{min:51, max:51}});

    //Preenchendo as variáveis com dados em conformidade com as restições da regra de negócio para a descrição do produto
    DescricaoProdutovalido = faker.string.alpha({length:{min:10, max:200}});
    DescricaoProdutoTamanhoMinInvalido = faker.string.alpha({length:{min:0, max:9}});
    DescricaoProdutoTamanhoMaxInvalido = faker.string.alpha({length:{min:201, max:201}});

    //Preenchendo as variáveis com dados em conformidade com as restições da regra de negócio para o valor do produto
    ValorProdutoValido = faker.number.int({min: 1, max: 2000});
    ValorMinProdutoInvalido = faker.number.int({min: -10, max: -1});

    //Preenchendo um array de categorias válido com dados simulados
    const categoriaValida01 = Categoria.criar({nome: faker.string.alpha({length:{min:3, max: 50}})});
    const categoriaValida02 = Categoria.criar({nome: faker.string.alpha({length:{min:3, max: 50}})});
    const categoriaValida03 = Categoria.criar({nome: faker.string.alpha({length:{min:3, max: 50}})});
    const categoriaValida04 = Categoria.criar({nome: faker.string.alpha({length:{min:3, max: 50}})});
    CategoriasValidas = faker.helpers.arrayElements<Categoria>([categoriaValida01,categoriaValida02,categoriaValida03], {min: 1, max:3});
    CategoriasQtdMinInvalidas = [];
    CategoriasQtdMaxInvalidas = faker.helpers.arrayElements<Categoria>([categoriaValida01,categoriaValida02,categoriaValida03, categoriaValida04], {min: 4, max:4});

});


//Suite de Testes de Unidade - Entidade de Domínio
//Usando o 'describe', você pode definir como um conjunto de testes ou benchmarks relacionados
describe ('Entidade de Domínio: Produto', () => {

    describe('Criar Produto', () => {
        
        //Teste define um conjunto de expectativas relacionadas. 
        test('Deve Criar Um Produto Válido', async () => {


            //Dado (Given)
            const produtoValido: CriarProdutoProps = {
                nome: NomeProdutoValido,
                descricao: DescricaoProdutovalido,
                valor: ValorProdutoValido,
                categorias: CategoriasValidas
            };

            //Quando (When) e Então (Then)
            expect(Produto.criar(produtoValido))
                .to.be.instanceof(Produto);
        });     

    });

      //Teste define um conjunto de expectativas relacionadas. 
      test('Não Deve Criar Produto Com Nome Inválido (Tamanho Mínimo)', async () => {

        //Dado (Given)
        //Nome menor que cinco caracteres
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: NomeProdutoTamanhoMinInvalido,
            descricao: DescricaoProdutovalido,
            valor: ValorProdutoValido,
            categorias: CategoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(ProdutoExceptions.NomeProdutoTamanhoMinimoInvalido);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Nome Inválido (Tamanho Máximo)', async () => {
  
        //Dado (Given)
        //Nome maior que cinquenta caracteres
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: NomeProdutoTamanhoMaxInvalido,
            descricao: DescricaoProdutovalido,
            valor: ValorProdutoValido,
            categorias: CategoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(ProdutoExceptions.NomeProdutoTamanhoMaximoInvalido);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Descrição Inválida (Tamanho Mínimo)', async () => {
   
        //Dado (Given)
        //Descrição menor que dez caracteres
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: NomeProdutoValido,
            descricao: DescricaoProdutoTamanhoMinInvalido,
            valor: ValorProdutoValido,
            categorias: CategoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(ProdutoExceptions.DescricaoProdutoTamanhoMinimoInvalido);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Descrição Inválida (Tamanho Máximo)', async () => {
       
        //Dado (Given)
        //Descrição maior que duzentos caracteres
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: NomeProdutoValido,
            descricao: DescricaoProdutoTamanhoMaxInvalido,
            valor: ValorProdutoValido,
            categorias: CategoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(ProdutoExceptions.DescricaoProdutoTamanhoMaximoInvalido);

    });

    //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Valor Mínimo Inválido', async () => {
       
        //Dado (Given)
        //Valor mínimo menor que 0
        const produtoNomeInvalido: CriarProdutoProps = {
            nome: NomeProdutoValido,
            descricao: DescricaoProdutovalido,
            valor: ValorMinProdutoInvalido,
            categorias: CategoriasValidas
        };

        //Quando (When) e Então (Then)
        expect(() => Produto.criar(produtoNomeInvalido))
            .toThrowError(ProdutoExceptions.ValorMinimoProdutoInvalido);

    });

     //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Número Mínimo de Categorias Inválido', async () => {
    
            //Dado (Given)
            //Nenhuma categoria é atribuida - menor que 1
            const produtoNomeInvalido: CriarProdutoProps = {
                nome: NomeProdutoValido,
                descricao: DescricaoProdutovalido,
                valor: ValorProdutoValido,
                categorias: CategoriasQtdMinInvalidas
            };

            //Quando (When) e Então (Then)
            expect(() => Produto.criar(produtoNomeInvalido))
                .toThrowError(ProdutoExceptions.QtdMinimaCategoriasProdutoInvalida);

        });

        //Teste define um conjunto de expectativas relacionadas. 
    test('Não Deve Criar Produto Com Número Máximo de Categorias Inválido', async () => {

            //Dado (Given)
            //4 categorias é atribuidas - maior que 3
            const produtoNomeInvalido: CriarProdutoProps = {
                nome: NomeProdutoValido,
                descricao: DescricaoProdutovalido,
                valor: ValorProdutoValido,
                categorias: CategoriasQtdMaxInvalidas
            };

            //Quando (When) e Então (Then)
            expect(() => Produto.criar(produtoNomeInvalido))
                .toThrowError(ProdutoExceptions.QtdMaximaCategoriasProdutoInvalida);

        });
});