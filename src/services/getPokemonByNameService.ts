import { IRepository } from "../repositories/IRepository";

export const GetPokemonByNameService = async (
  repository: IRepository,
  name: string
) => {
  if (!name) throw new Error("invalid arguments");

  const pokemonExistsByName = await repository.getByName(name);

  if (!pokemonExistsByName) throw new Error("pokemon not founded by this name");

  return pokemonExistsByName;
};
