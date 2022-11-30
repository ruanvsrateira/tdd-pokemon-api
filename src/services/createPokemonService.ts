import { IPokemon } from "../interfaces/pokemon";
import { IRepository } from "../repositories/IRepository";

export const CreatePokemonService = async (
  repository: IRepository,
  pokemon: IPokemon
) => {
  const existsPokemonByName = await repository.getByName(pokemon.name);

  if (!pokemon.name || !pokemon.type || !pokemon.weight)
    throw new Error("invalid arguments");

  if (existsPokemonByName)
    throw new Error("pokemon already exists by this name");

  return await repository.create(pokemon);
};
