import { faker } from "@faker-js/faker";
import { beforeAll, describe, expect, test } from "vitest";
import { IDEntityUUIDInvalid } from "@shared/domain/domain.exception";
import { Categoria } from "./categoria.entity";
import { NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from "./categoria.exceptions";
import { CriarCategoriaProps, RecuperarCategoriaProps } from "./categoria.types";

let nomeCategoriaValido: string;
let NomeCategoriaTamanhoMinInvalido: string;
let NomeCategoriaTamanhoMaxInvalido: string;
let UUIDValido: string;
let UUIDInvalido: string;

beforeAll(async () => {
    //Preenchendo as variáveis com dados em conformidade com as restrições da regra de negócio
    nomeCategoriaValido = faker.string.alpha({length:{min:3,max:50}});
    NomeCategoriaTamanhoMinInvalido = faker.string.alpha({length:{min:0, max:2}});
    NomeCategoriaTamanhoMaxInvalido = faker.string.alpha({length:{min:51, max:51}});
    UUIDValido = faker.string.uuid(); // Retorna um UUID v4
    UUIDInvalido = faker.string.alpha({length:{min:1,max:20}});
});


//Suítes de Testes de Unidade - Entidade de Domínio.
//Usando a descrição, você pode definir como um conjunto de testes ou benchmarks relacionados.
describe('Entidade de Domínio: Criar Categoria', () => {

    //Teste define um conjunto de expectativas relacionadas.
    test('Deve criar uma Categoria Válida', async () => {
        //Dado (Given)
        const categoriaValida: CriarCategoriaProps = {
            nome: nomeCategoriaValido
        };
        
        //Quando (when) e Então (then)
        expect(Categoria.criar(categoriaValida))
            .to.toBeInstanceOf(Categoria);
    });

    test('Não deve Criar Categoria Com Nome Inválido (Tamanho Mínimo)', async => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome: NomeCategoriaTamanhoMinInvalido
        }

        //Quando (when) e Então (then)
        expect(() => Categoria.criar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriaTamanhoMinimoInvalido);

    });

    test('Não deve Criar Categoria Com Nome Inválido (Tamanho Máximo)', async => {
        //Dado (Given)
        //Nome maior que 50 caracteres.
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome: NomeCategoriaTamanhoMaxInvalido
        }

        //Quando (when) e Então (then)
        expect(() => Categoria.criar(categoriaNomeInvalido))
        .toThrowError(NomeCategoriaTamanhoMaximoInvalido);

    });

});

describe('Entidade de Domínio: Recuperar Categoria ', () => {

    //Teste define um conjunto de expectativas relacionadas.
    test('Deve recuperar uma Categoria Válida', async () => {
        //Dado (Given)
        const categoriaValida: RecuperarCategoriaProps = {
           id: UUIDValido,
            nome: nomeCategoriaValido
        };
        //Quando (when) e Então (then)
        expect(Categoria.recuperar(categoriaValida))
            .toBeInstanceOf(Categoria);
    });

    test('Não deve recuperar Categoria com ID Inválido (UUID Inválido)', async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaIdInvalida: RecuperarCategoriaProps = {
           id: UUIDInvalido,
            nome: nomeCategoriaValido
        };
        //Quando (when) e Então (then)
        expect(() => Categoria.recuperar(categoriaIdInvalida))
            .toThrowError(IDEntityUUIDInvalid);
    });
    
    test('Não deve recuperar Categoria com Nome Inválido (Tamanho Mínimo)', async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido: RecuperarCategoriaProps = {
           id: UUIDValido,
            nome: NomeCategoriaTamanhoMinInvalido
        };
        //Quando (when) e Então (then)
        expect(() => Categoria.recuperar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriaTamanhoMinimoInvalido);
    });

    test('Não deve recuperar Categoria com Nome Inválido (Tamanho Máximo)', async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido: RecuperarCategoriaProps = {
           id: UUIDValido,
            nome: NomeCategoriaTamanhoMaxInvalido
        };
        //Quando (when) e Então (then)
        expect(() => Categoria.recuperar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriaTamanhoMaximoInvalido);
    });
});