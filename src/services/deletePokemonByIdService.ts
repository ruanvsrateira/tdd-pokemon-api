import { IRepository } from "../repositories/IRepository";

export const DeletePokemonByIdService = async (
  repository: IRepository,
  id: number
) => {
  if (!id) throw new Error("invalid arguments");

  const existsPokemonById = await repository.getById(id);

  if (!existsPokemonById) throw new Error("pokemon not founded by this id");

  return await repository.deleteById(id);
};
