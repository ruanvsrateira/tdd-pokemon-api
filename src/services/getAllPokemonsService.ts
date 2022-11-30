import { Pokemon } from "@prisma/client";
import { IRepository } from "../repositories/IRepository";

export const GetAllPokemonsService = async (
  repository: IRepository
): Promise<Pokemon[]> => {
  return await repository.getAll();
};
