import { prisma } from "../../prisma";
import { IPokemon } from "../interfaces/pokemon";
import { IRepository } from "../repositories/IRepository";

export const UpdatePokemonService = async (
  repository: IRepository,
  id: number,
  pokemon: IPokemon
) => {
  if (!pokemon.name || !pokemon.type || !pokemon.weight)
    throw new Error("invalid arguments");

  const pokemonExistsById = await repository.getById(id);

  if (!pokemonExistsById) throw new Error("pokemon not founded by this id");

  return repository.updateById(id, pokemon);
};
