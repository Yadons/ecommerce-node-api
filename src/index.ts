import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { CategoriaPrismaRepository } from "@modules/catalogo/infra/database/categoria.prisma.repository";
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

   //const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("2d6e302e-0c66-42d5-9de6-48cf927a389f");

    //console.log(categoriaRecuperada)

    //const todasCategorias: Array<Categoria> = await categoriaRepo.recuperarTodos();
    //console.log(todasCategorias)

    //const existeCategoria: boolean = await categoriaRepo.existe("2d6e302e-0c66-42d5-9de6-48cf927a389f");
    //console.log(existeCategoria)
    // const categoria: Categoria = Categoria.criar({
    //     nome:'Sala e Quarto'
    // });

    // const categoriaInserida = await categoriaRepo.inserir(categoria);
    // console.log(categoriaInserida)

    // const categoria: Categoria = Categoria.recuperar({
    //     id: "2d6e302e-0c66-42d5-9de6-48cf927a389f",
    //     nome: "Banho"
    // })

    // const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id, categoria);
    // console.log(atualizouCategoria);

    // const categoriaDeletada: boolean = await categoriaRepo.deletar("71f11c7e-abab-43d9-88bc-b7933d0ac8c4");
    // console.log(categoriaDeletada);

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