import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { Produto } from "@modules/catalogo/domain/produto/produto.entity";
import { CategoriaPrismaRepository } from "@modules/catalogo/infra/database/categoria.prisma.repository";
import { ProdutoPrismaRepository } from "@modules/catalogo/infra/database/produto.prisma.repository";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exception";

const prisma = new PrismaClient({
    log: ['query', 'info'],
    errorFormat: 'pretty'
});

async function main() {
    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );

    const categoriaRepo = new CategoriaPrismaRepository(prisma);
    const produtoRepo = new ProdutoPrismaRepository(prisma);

//    const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("b08e5ac8-33f4-4ec8-b6ea-9703460797d7");

//     console.log(categoriaRecuperada)

    // const todasCategorias: Array<Categoria> = await categoriaRepo.recuperarTodos();
    // console.log(todasCategorias)

    //const existeCategoria: boolean = await categoriaRepo.existe("2d6e302e-0c66-42d5-9de6-48cf927a389f");
    //console.log(existeCategoria)
    // const categoria: Categoria = Categoria.criar({
    //     nome:'Cozinha'
    // });

    // const categoriaInserida = await categoriaRepo.inserir(categoria);
    // console.log(categoriaInserida)

    // const categoria: Categoria = Categoria.recuperar({
    //     id: "b08e5ac8-33f4-4ec8-b6ea-9703460797d7",
    //     nome: "Cozinha Americana"
    // })

    // const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id, categoria);
    // console.log(atualizouCategoria);

    // const categoriaDeletada: boolean = await categoriaRepo.deletar("b08e5ac8-33f4-4ec8-b6ea-9703460797d7");
    // console.log(categoriaDeletada);

    // const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("7061d559-ab25-4182-98ce-170afdf2acd2");
    // console.log(produtoRecuperado);

    // console.log(produtoRecuperado?.estaDeletado)

    // const categoria01: Categoria = Categoria.recuperar({
    //     id: '23829bbf-b2da-4015-8079-a6bbb01125e0',
    //     nome: 'Mesa'
    // });
    // const categoria02: Categoria = Categoria.recuperar({
    //     id: '2d6e302e-0c66-42d5-9de6-48cf927a389f',
    //     nome: 'Banho'
    // });

    // const produto: Produto = Produto.criar({
    //     nome: 'Toalha de Cozinha',
    //     descricao: 'toalha de algodão',
    //     valor: 40,
    //     categorias: [categoria01, categoria02]
    // });

    // const produtoInserido = await produtoRepo.inserir(produto);
    // console.log(produtoInserido);
    
    // const todosProdutos: Array<Produto> = await produtoRepo.recuperarTodos();
    // console.log(todosProdutos)

    // const produto = {
    //     id: "b1483b4c-3e9a-4fe3-b822-9331b81e9518",
    //     nome: "Toalha de Cozinha",
    //     descricao: "toalha de algodão",
    //     valor: 200
    // };

    // const atualizouProduto: boolean = await produtoRepo.atualizar(produto.id, produto);
    // console.log(atualizouProduto)

    // const produtoDeletado: boolean = await produtoRepo.deletar("b1483b4c-3e9a-4fe3-b822-9331b81e9518");
    // console.log(produtoDeletado);
}

main()
    .then(async () =>{
        await prisma.$disconnect()
    })
    .catch(async (error) =>{
            if(error instanceof DomainException) {
                console.log("Exceção de Domínio");
                console.log(error.message);
            }
            else {
                console.log("Outras Exceções");
                console.log(error.message);
            }
            await prisma.$disconnect()
            process.exit(1)
    })