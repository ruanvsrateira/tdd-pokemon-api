import { Pokemon } from "@prisma/client";
import { prisma } from "../../../prisma";
import { IPokemon } from "../../interfaces/pokemon";
import { IRepository } from "../IRepository";

class prismaRepository implements IRepository {
  async getAll() {
    return await prisma.pokemon.findMany({});
  }

  async create(pokemon: IPokemon) {
    return await prisma.pokemon.create({
      data: {
        name: pokemon.name,
        type: pokemon.type.toString(),
        weight: pokemon.weight,
      },
    });
  }

  async deleteById(id: number) {
    return await prisma.pokemon.delete({
      where: { id },
    });
  }

  async updateById(id: number, pokemon: IPokemon) {
    return await prisma.pokemon.update({
      where: { id },
      data: {
        name: pokemon.name,
        type: pokemon.type.toString(),
        weight: pokemon.weight,
      },
    });
  }

  async getById(id: number) {
    return await prisma.pokemon.findUnique({
      where: { id },
    });
  }

  async getByName(name: string) {
    return await prisma.pokemon.findUnique({
      where: {
        name,
      },
    });
  }
}

export const PrismaRepository = new prismaRepository();
