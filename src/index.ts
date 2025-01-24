import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { PrismaClient } from "@prisma/client";
import { DomainException } from "@shared/domain/domain.exception";

const prisma = new PrismaClient();

async function main() {
    
    ////////////////////////
    ///Criar Categorias////
    ////////////////////// 
    
    // let categoria: Categoria;
    // categoria = Categoria.criar({nome: "mesa"});

    // ///////////////////////////////////
    // ///Persistir Categoria no Banco////
    // ////////////////////////////////// 

    // await prisma.categoria.create({
    //     data: {
    //         id: categoria.id,
    //         nome: categoria.nome
    //     }
    // })


     ///////////////////////////////////
    ///Atualizar Categoria no Banco////
    ////////////////////////////////// 
    
    const categoriaRecuperada = await prisma.categoria.update({
        where: {id:'2d6e302e-0c66-42d5-9de6-48cf927a389f'},
        data: { nome: 'banho'},
    })
    
    ////////////////////////
    ///Listar Categorias///
    //////////////////////

    const ListarCategorias = await prisma.categoria.findMany();
    console.log(ListarCategorias);
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