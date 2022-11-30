import { IRepository } from "../repositories/IRepository";

export const GetPokemonByIdService = async (
  repository: IRepository,
  id: number
) => {
  if (!id) throw new Error("invalid arguments");

  const pokemonExistsById = await repository.getById(id);

  if (!pokemonExistsById) throw new Error("pokemon not founded by this id");

  return pokemonExistsById;
};
