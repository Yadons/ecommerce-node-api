import { describe, expect, test } from "vitest";
import { CriarCategoriaProps, RecuperarCategoriaProps } from "./categoria.types";
import { Categoria } from "./categoria.entity";
import { NomeCategoriaTamanhoMaximoInvalido, NomeCategoriaTamanhoMinimoInvalido } from "./categoria.exceptions";
import { IDEntityUUIDInvalid } from "../../../shared/domain/domain.exception";

//Suítes de Testes de Unidade - Entidade de Domínio.
//Usando a descrição, você pode definir como um conjunto de testes ou benchmarks relacionados.
describe('Entidade de Domínio: Criar Categoria', () => {

    //Teste define um conjunto de expectativas relacionadas.
    test('Deve criar uma Categoria Válida', async () => {
        //Dado (Given)
        const categoriaValida: CriarCategoriaProps = {
            nome: 'cama'
        };
        //Quando (when) e Então (then)
        expect(Categoria.criar(categoriaValida))
            .to.toBeInstanceOf(Categoria);
    });

    test('Não deve Criar Categoria Com Nome Inválido (Tamanho Mínimo)', async => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome: 'ca'
        }

        //Quando (when) e Então (then)
        expect(() => Categoria.criar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriaTamanhoMinimoInvalido);

    });

    test('Não deve Criar Categoria Com Nome Inválido (Tamanho Máximo)', async => {
        //Dado (Given)
        //Nome maior que 50 caracteres.
        const categoriaNomeInvalido: CriarCategoriaProps = {
            nome: 'ca12313255156548778855135154514512155646751521451565985545454'
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
           id: 'b02f5f98-f718-441c-8e6c-63ffb08f495b',
            nome: 'cama'
        };
        //Quando (when) e Então (then)
        expect(Categoria.recuperar(categoriaValida))
            .toBeInstanceOf(Categoria);
    });

    test('Não deve recuperar Categoria com ID Inválido (UUID Inválido)', async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaIdInvalida: RecuperarCategoriaProps = {
           id: '1234',
            nome: 'cama'
        };
        //Quando (when) e Então (then)
        expect(() => Categoria.recuperar(categoriaIdInvalida))
            .toThrowError(IDEntityUUIDInvalid);
    });
    
    test('Não deve recuperar Categoria com Nome Inválido (Tamanho Mínimo)', async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido: RecuperarCategoriaProps = {
           id: 'b02f5f98-f718-441c-8e6c-63ffb08f495b',
            nome: 'ma'
        };
        //Quando (when) e Então (then)
        expect(() => Categoria.recuperar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriaTamanhoMinimoInvalido);
    });

    test('Não deve recuperar Categoria com Nome Inválido (Tamanho Máximo)', async () => {
        //Dado (Given)
        //Nome menor que três caracteres
        const categoriaNomeInvalido: RecuperarCategoriaProps = {
           id: 'b02f5f98-f718-441c-8e6c-63ffb08f495b',
            nome: '123456789123546578511022655145525651231556541645651535456'
        };
        //Quando (when) e Então (then)
        expect(() => Categoria.recuperar(categoriaNomeInvalido))
            .toThrowError(NomeCategoriaTamanhoMaximoInvalido);
    });
});