import { Prisma } from "@prisma/client";

const ProdutoIncludeCategoriaPrisma = Prisma.validator<Prisma.ProdutoInclude>()(
    {
        categorias: {
            include: {
                categoria: true
            }
        }
    }
);

type ProdutoComCategoriaPrisma = Prisma.ProdutoGetPayload<
    {include: typeof ProdutoIncludeCategoriaPrisma;}
>;

export {ProdutoIncludeCategoriaPrisma, ProdutoComCategoriaPrisma}